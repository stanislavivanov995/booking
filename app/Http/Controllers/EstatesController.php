<?php

namespace App\Http\Controllers;

use App\Exports\EstatesExport;
use Illuminate\Support\Facades\Redirect;
use App\Models\{Estate, Image, Category, Facility};
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreEstateRequest;
use GuzzleHttp\Client;
use Illuminate\Foundation\Http\FormRequest;
use Maatwebsite\Excel\Facades\Excel;

class EstatesController extends Controller
{
    const GOOGLE_LOCATION_API_KEY = 'AIzaSyDOQd7UoVJHt28wLiHMD0ZY0S_AiONShyo';

    public function index()
    {
        return Inertia::render('Admin/Estates/List', [
            'estates' => Auth::user()->estates()->with('images')->with('category')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Estates/Create', [
            'categories' => Category::all()
        ]);
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
            'price' => $request->price,
            'currency' => $request->currency,
            'latitude' => $latitude,
            'longitude' => $longitude,
            'category_id' => $request->category_id,
            'rooms' => $request->rooms,
            'beds' => $request->beds,
            'arrive_hour' => $request->arrive_hour,
            'leave_hour' => $request->leave_hour
        ]);

        Facility::create([
            'estate_id' => $estate->id,
            'wifi' => $request->wifi,
            'parking' => $request->parking,
            'breakfast' => $request->breakfast,
            'lunch' => $request->lunch,
            'dinner' => $request->dinner,
            'swimming_pool' => $request->swimming_pool,
            'spa' => $request->spa,
        ]);

        $images = $request->file('images');

        if ($images) {
            foreach ($images as $image) {
                $path = $image->store('public/images');

                $url = asset('storage/' . str_replace('public/', '', $path));

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
        $estate->load('facilities');
        $estate->load('images');

        $estate->facilities->wifi = $estate->facilities->wifi === "1";
        $estate->facilities->parking = $estate->facilities->parking === "1";
        $estate->facilities->breakfast = $estate->facilities->breakfast === "1";
        $estate->facilities->lunch = $estate->facilities->lunch === "1";
        $estate->facilities->dinner = $estate->facilities->dinner === "1";
        $estate->facilities->swimming_pool = $estate->facilities->swimming_pool === "1";
        $estate->facilities->spa = $estate->facilities->spa === "1";


        return Inertia::render('Admin/Estates/Edit', [
            'estate' => $estate,
            'categories' => Category::all(),
        ]);
    }

    public function show(Estate $estate)
    {
        $estate->load('category');

        $facilitiesArray = $estate->facilities->toArray();

        $availableFacilities = array_filter($facilitiesArray, function ($value) {
            return $value == 1;
        });

        $facilities = array_combine(
            array_map(function ($key) {
                return str_replace('_', ' ', ucfirst($key));
            }, array_keys($availableFacilities)),
            $availableFacilities
        );

        $images = $estate->images->toArray();

        return Inertia::render('Admin/Estates/Show', [
            'estate' => $estate,
            'facilities' => $facilities,
            'images' => $images
        ]);
    }

        // TODO:
    public function export(FormRequest $request)
    {
        $fileFormat = $request->query('format', 'XLSX');
        return Excel::download(new EstatesExport, 'estates.xlsx', \Maatwebsite\Excel\Excel::XLSX);
    }
}
