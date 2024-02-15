<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $category = Category::all(); // [{name: asda, email: asdasd}, {}. {}]
        $data = [ // ["contacts" => [{name: asda, email: asdasd}, {}. {}]] $data["contacts"] // $data->name
            "categories" => $category,
        ];
        return view("category.index", $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return view("category.create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $this->validate($request, [
            'category' => 'required',
        ]);

        Category::create([
            'name' => $request->input('category'),
        ]);

        //redirect to index
        return redirect()->route('category.index')->with(['success' => 'Data Berhasil Disimpan!']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
        $data = [ // ["contacts" => [{name: asda, email: asdasd}, {}. {}]] $data["contacts"] // $data->name
            "categories" => $category,
        ];
        return view("category.edit", $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $this->validate($request, [
            'category-name' => 'required',
        ]);

        $category->update([
            'name' => $request->input('category-name'),
        ]);

        //redirect to index
        return redirect()->route('category.index')->with(['success' => 'Data Berhasil Diubah!']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //get post by ID
        $category = Category::findOrFail($category->id);

        //delete category
        $category->delete();

        //redirect to index
        return redirect()->route('category.index')->with(['success' => 'Kategori Berhasil Dihapus!']);
    }
}
