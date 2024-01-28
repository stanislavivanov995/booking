<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\{Estate, Category};
use Illuminate\Support\Facades\Auth;
use GuzzleHttp\Client;

class HomeController extends Controller
{
    const GOOGLE_LOCATION_API_KEY = 'AIzaSyDOQd7UoVJHt28wLiHMD0ZY0S_AiONShyo';
    
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

        $client = new Client();
        $response = $client->get(
            "https://maps.googleapis.com/maps/api/place/details/json?placeid=$placeId&key="
            . self::GOOGLE_LOCATION_API_KEY
        );

        $locationData = json_decode($response->getBody(), true);

        if ($locationData['status'] === 'OK') {
            $locationDetails = $locationData['result'];

            $locationName = $locationDetails['name'];
            $latitude = $locationDetails['geometry']['location']['lat'];
            $longitude = $locationDetails['geometry']['location']['lng'];
        }

        $estates = Estate::select('*')
        ->selectRaw(
            '(6371 * acos(cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) + sin(radians(?)) * sin(radians(latitude)))) AS distance',
            [$latitude, $longitude, $latitude]
        )
        ->having('distance', '<', 20) // 20 km away distance
        ->orderBy('distance')
        ->with('images')
        ->get();

        return Inertia::render('Results/Results', [
            'estates' => $estates,
             'categories' => Category::all()
        ]);
    }
}
