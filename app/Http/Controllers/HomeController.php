<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\{Estate, Category};
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Home', [
            'categories' => Category::all()
        ]);
    }


    public function results(Request $request)
    {
        $placeId = $request->place_id;
        $checkIn = $request->check_in;
        $checkOut = $request->check_out;

        return Inertia::render('Results/Results', [
            'estates' => Estate::with('images')->get(),
             'categories' => Category::all()
        ]);
    }
}
