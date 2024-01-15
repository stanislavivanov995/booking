<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Estate;
use Illuminate\Support\Facades\Auth;
use App\Models\Category;
use App\Utils\CalculateDistance;
use App\Http\Filters\EstatesFilter;
use App\Utils\ExtractLocationData;


class HomeController extends Controller
{
    use CalculateDistance, ExtractLocationData;

    protected $latitude = null;
    protected $longitude = null;

    protected function filterByLocation($request, $estates)
    {
        $placeId = $request->place_id;

        $locationData = $this->extract_location_data($placeId, env('GOOGLE_LOCATION_API_KEY', ''));

        if ($locationData['status'] === 'OK') {
            $locationDetails = $locationData['result'];
            
            $this->latitude = $locationDetails['geometry']['location']['lat'];
            $this->longitude = $locationDetails['geometry']['location']['lng'];
        }

        if ($this->latitude && $this->longitude) {

            $estates = collect($estates->filter(
                function ($estate) use ($request) {
                $radius = $request->query('radius', 0);

                return $this->distance($estate, $this->latitude, $this->longitude) <= $radius;
            }));
        }

        return $estates;
    }


    public function index()
    {
        return Inertia::render('Home/Home', [
            'categories' => Category::all()
        ]);
    }


    public function results(Request $request, EstatesFilter $filter)
    {
        $list = Estate::filter($filter)->get();

        $filteredByLocation = $this->filterByLocation($request, $list);
        // dd($filteredByLocation->all());

        return Inertia::render('Results/Results', [
            'estates' => $filteredByLocation
        ]);
    }
}
