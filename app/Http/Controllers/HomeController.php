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

    public function details(Estate $estate)
    {
        $estate->load('category');

        $facilities = [];
 
        if($estate->facilities){
            $facilitiesArray = $estate->facilities->toArray();
            
            $availableFacilities = array_filter($facilitiesArray, function($value) {
                return $value == 1;
            });
            
            $facilities = array_combine(
                array_map(function ($key) {
                    return str_replace('_', ' ', ucfirst($key));
                }, array_keys($availableFacilities)),
                $availableFacilities
            );
        }

        $images = $estate->images->toArray();

        return Inertia::render('Home/Details', [
            'estate' => $estate,
            'facilities' => $facilities,
            'images'=> $images
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
