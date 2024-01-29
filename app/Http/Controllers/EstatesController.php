<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use App\Models\{Estate, Image, Category, Facility};
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreEstateRequest;
use App\Http\Requests\UpdateEstateRequest;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

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

    public function getLocationData($place_id): array
    {
        $client = new Client();
        $response = $client->get(
            "https://maps.googleapis.com/maps/api/place/details/json?placeid=$place_id&key="
                . self::GOOGLE_LOCATION_API_KEY
        );

        $locationData = json_decode($response->getBody(), true);

        if ($locationData['status'] === 'OK') {
            $locationDetails = $locationData['result'];

            $locationName = $locationDetails['name'];
            $latitude = $locationDetails['geometry']['location']['lat'];
            $longitude = $locationDetails['geometry']['location']['lng'];
        }

        return [
            'locationName' => $locationName,
            'latitude' => $latitude,
            'longitude' => $longitude
        ];
    }

    public function store(StoreEstateRequest $request)
    {
        $placeId = $request->place_id;

        $locationData = $this->getLocationData($placeId);

        $estate = Estate::create([
            'user_id' => Auth::id(),
            'name' => $request->name,
            'description' => $request->description,
            'location' => $locationData['locationName'],
            'place_id' => $placeId,
            'price' => $request->price,
            'currency' => $request->currency,
            'latitude' => $locationData['latitude'],
            'longitude' => $locationData['longitude'],
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
            $this->uploadImages($images, $estate);
        }

        return Redirect::route('estates.index');
    }

    public function uploadImages($images, $estate)
    {
        foreach ($images as $image) {
            $path = $image->store('public/images');

            $url = asset(str_replace('public', 'storage', $path));

            Image::create([
                'path' => $path,
                'url' => $url,
                'estate_id' => $estate->id,
            ]);
        }
    }

    public function edit(Estate $estate)
    {
        $estate->load('facilities');
        $estate->load('images');

        // $estate->facilities->wifi = $estate->facilities->wifi === "1";
        // $estate->facilities->parking = $estate->facilities->parking === "1";
        // $estate->facilities->breakfast = $estate->facilities->breakfast === "1";
        // $estate->facilities->lunch = $estate->facilities->lunch === "1";
        // $estate->facilities->dinner = $estate->facilities->dinner === "1";
        // $estate->facilities->swimming_pool = $estate->facilities->swimming_pool === "1";
        // $estate->facilities->spa = $estate->facilities->spa === "1";

        $estate->facilities->wifi === "1" ? $estate->facilities->wifi =true : $estate->facilities->wifi =false;
        $estate->facilities->parking === "1" ? $estate->facilities->parking =true : $estate->facilities->parking =false;
        $estate->facilities->breakfast === "1" ? $estate->facilities->breakfast =true : $estate->facilities->breakfast =false;
        $estate->facilities->lunch === "1" ? $estate->facilities->lunch =true : $estate->facilities->lunch =false;
        $estate->facilities->dinner === "1" ? $estate->facilities->dinner =true : $estate->facilities->dinner =false;
        $estate->facilities->swimming_pool === "1" ? $estate->facilities->swimming_pool =true : $estate->facilities->swimming_pool =false;
        $estate->facilities->spa === "1" ? $estate->facilities->spa =true : $estate->facilities->spa =false;

        return Inertia::render('Admin/Estates/Edit', [
            'estate' => $estate,
            'categories' => Category::all(),
        ]);
    }

    public function update(UpdateEstateRequest $request, string $id)
    {
        $estate = Estate::find($id);

        $locationData = $this->getLocationData($request->place_id);

        $estateData = [
            'name' => $request->name,
            'description' => $request->description,
            'location' => $locationData['locationName'],
            'latitude' => $locationData['latitude'],
            'longitude' => $locationData['longitude'],
            'category_id' => $request->category_id,
            'arrive_hour' => $request->arrive_hour,
            'leave_hour' => $request->leave_hour,
            'price' => $request->price,
            'currency' => $request->currency,
            'place_id' => $request->place_id,
            'rooms' => $request->rooms,
            'beds' => $request->beds,
        ];

        $facilitiesData = [
            'estate_id' => $id,
            'wifi' => $request->wifi,
            'parking' => $request->parking,
            'breakfast' => $request->breakfast,
            'lunch' => $request->lunch,
            'dinner' => $request->dinner,
            'swimming_pool' => $request->swimming_pool,
            'spa' => $request->spa,
        ];

        
        foreach ($estateData as $field => $value) {
            $value && $estate->$field = $value;
        }

        $facilities = Facility::whereEstateId($id)->first();
        $facilities->delete();
        Facility::create($facilitiesData);

        $images = Image::whereEstateId($id)->get();

        foreach ($images as $file) {
            Storage::delete($file->path);
            $file->delete();
        }

        $newImages = $request->file('images');

        $newImages && $this->uploadImages($newImages, $estate);

        $estate->save();

        return Redirect::route('estates.index')->with('success', 'Estate was updated successfully!');
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
            'images'=> $images,
            'owner' => $estate->user,
            'images' => $images
        ]);
    }

    public function delete(Estate $estate)
    {
        $estate->facilities->delete();
        foreach ($estate->images as $image) {
            Storage::delete($image->path); 
            $image->forceDelete();
        }
        $estate->delete();
        return Redirect::route('estates.index');
    }

    public function disable(string $id)
    {
        $estate = Estate::findOrFail($id);
        $estate->is_disabled = 1;
        $estate->save();

        return Redirect::route('estates.index');
    }

    public function enable(string $id)
    {
        $estate = Estate::findOrFail($id);
        $estate->is_disabled = 0;
        $estate->save();

        return Redirect::route('estates.index');
    }

    public function clicks(string $estateId): void
    {
        $estate = Estate::find($estateId);
        $estate->clicks = $estate->clicks + 1;
        $estate->save();
    }
}
