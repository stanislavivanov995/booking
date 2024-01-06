<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\{Estate, Image};
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreEstateRequest;

class EstatesController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Estates/List', [
            'estates' => Auth::user()->estates
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Estates/Create');
    }

    public function store(StoreEstateRequest $request)
    {
        $estate = Estate::create([
            'user_id' => Auth::id(),
            'name' => $request->name,
            'description' => $request->description,
            'price' => 100,
            'currency' => 'bgn',
            'category_id' => 1,
            'rooms' => 3
        ]);

        $images = $request->file('images');

        foreach ($images as $image) {
            $path = $image->store('images');
            $url = asset('storage/' . $path);

            Image::create([
                'path' => $path,
                'url' => $url,
                'estate_id' => $estate->id,
            ]);
        }

        return Redirect::route('estates.index')->with('success', 'Estate was created successfully!');
    }

    public function edit(Estate $estate) 
    {
        return Inertia::render('Admin/Estates/Edit', [
            'estate' => $estate
        ]);
    }
}
