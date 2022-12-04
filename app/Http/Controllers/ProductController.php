<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products =  Product::with('category')->get();
        return $products;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'description'=>'required',
            'price'=>'required|numeric',
            'image_file'=>'mimes:jpg,png,gif,webp',
            'category_id'=>'required|numeric'
        ]);

        // dd($request->all());

        $product = Product::create($request->all());

        if($request->image_file){
            $path = $request->image_file->store('products', ['disk'=>'public']);
            $product->image = '/uploads/' . $path;
            $product->save();
        }

        foreach($request->gallery as $key=>$file){
            $path = $file->store('products', ['disk'=>'public']);
            $image = new Gallery();
            $image->path = '/uploads/' . $path;
            $image->product_id = $product->id;
            $image->order = ($key+1);
            $image->save();             
        }

        $product->category = $product->category;
        $product->image = $product->image;
        $product->galleries = $product->galleries;



        return response()->json([
            'success'=>true,
            'data'=>$product
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name'=>'required',
            'description'=>'required',
            'price'=>'required|numeric',
            'image_file'=>'mimes:jpg,png,gif,webp',
            'category_id'=>'required|numeric'
        ]);

        $product = Product::findOrFail($id);
        $product->update($request->all());

        if($request->image_file){
            $path = $request->image_file->store('products', ['disk'=>'public']);
            $product->image = '/uploads/' . $path;
            $product->save();
        }elseif(!$request->image){
            unlink(public_path() . $product->image);
            $product->image = null;
            $product->save();
        }

        if ($request->newImages) {
            foreach ($request->newImages as $key => $file) {
                $path = $file->store('products', ['disk' => 'public']);
                $image = new Gallery();
                $image->path = '/uploads/' . $path;
                $image->product_id = $product->id;
                $image->order = array_search($file->getClientOriginalName(), $request->gallery) + 1 ;
                $image->save();
            }
        }


        foreach ($product->galleries as $image) {
            if (!in_array($image->path, $request->gallery??[])) {
                unlink(public_path() . $image->path);
                $image->delete();
            } else {
                $image->order = array_search($image->path, $request->gallery) + 1;
                $image->save();
            }
        }
        
        

        $product->category = $product->category;
        $product->newGalleries = Gallery::where('product_id', $id)->orderBy('order')->get();

        return response()->json([
            'success'=>true,
            'data'=>$product
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json([
            'message' => 'Product deleted Successfully!'
        ]);
    }
}
