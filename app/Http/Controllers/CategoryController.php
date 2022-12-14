<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Category::all();
        $categories = Category::all();

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
            'name' => 'required',
            'image_file' => 'mimes:jpg,png,gif,webp',
        ]);

        $category =  Category::create($request->all());

        if ($request->image_file) {
            $path = $request->image_file->store('categories', ['disk' => 'public']);
            $category->image = '/uploads/' . $path;
            $category->save();
        }

        $category->image = $category->image;


        return response()->json([
            'success' => true,
            'data' => $category
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show(Category $category)
    {
        return $category;
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
            'image_file'=>'mimes:jpg,png,gif,webp',
        ]);

       $category =  Category::findOrFail($id);
       $category->update($request->all());

       if($request->image_file){
        $path = $request->image_file->store('categories', ['disk'=>'public']);
        $category->image = '/uploads/' . $path;
        $category->save();
    }
       
       return response()->json([
        'success' => true,
        'data' => $category
       ]);
       
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json([
            'message' => 'Category deleted Successfully!'
        ]);
    }

    
}
