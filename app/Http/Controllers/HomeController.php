<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Category;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Home', [
            'categories' => Category::all()
        ]);
    }
}
