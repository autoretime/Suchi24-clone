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
<<<<<<< HEAD
        return Category::all();
=======
        $categories = Category::all();
        dd($categories);
>>>>>>> efaa7a6cfc915dbe28ae4d93de86eb418d48f129
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
<<<<<<< HEAD
        $request->validate([
            'name' => 'required'
        ]);

       $category =  Category::create($request->all());
       return $category;
=======
        //
>>>>>>> efaa7a6cfc915dbe28ae4d93de86eb418d48f129
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
<<<<<<< HEAD
    public function show(Category $category)
    {
        return $category;
=======
    public function show($id)
    {
        //
>>>>>>> efaa7a6cfc915dbe28ae4d93de86eb418d48f129
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
<<<<<<< HEAD
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required'
        ]);

       $category->update($request->all());
       return $category;
=======
    public function update(Request $request, $id)
    {
        //
>>>>>>> efaa7a6cfc915dbe28ae4d93de86eb418d48f129
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
<<<<<<< HEAD
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json([
            'message' => 'Category deleted Successfully!'
        ]);
=======
    public function destroy($id)
    {
        //
>>>>>>> efaa7a6cfc915dbe28ae4d93de86eb418d48f129
    }
}
