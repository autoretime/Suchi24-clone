<?php

namespace App\Http\Controllers;

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

        $product = Product::create($request->all());

        if($request->image_file){
            $path = $request->image_file->store('products', ['disk'=>'public']);
            $product->image = '/uploads/' . $path;
            $product->save();
        }

        $product->category = $product->category;

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
        }

        $product->category = $product->category;

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
