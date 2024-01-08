<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\{Estate, Image};
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreEstateRequest;
use GuzzleHttp\Client;

class EstatesController extends Controller
{
    const GOOGLE_LOCATION_API_KEY = 'AIzaSyDOQd7UoVJHt28wLiHMD0ZY0S_AiONShyo';

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
        $placeId = $request->place_id;

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

        $estate = Estate::create([
            'user_id' => Auth::id(),
            'name' => $request->name,
            'description' => $request->description,
            'location' => $locationName,
            'price' => 100,
            'currency' => 'bgn',
            'latitude' => $latitude,
            'longitude' => $longitude,
            'category_id' => 1,
            'rooms' => 3
        ]);

        $images = $request->file('images');

        if($images) {
            foreach ($images as $image) {
                $path = $image->store('images');
                $url = asset('storage/' . $path);

                Image::create([
                    'path' => $path,
                    'url' => $url,
                    'estate_id' => $estate->id,
                ]);
            }
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
