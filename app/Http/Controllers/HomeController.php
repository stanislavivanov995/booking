<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Estate;
use Illuminate\Support\Facades\Auth;
use App\Models\Category;
use App\Utils\CalculateDistance;
use App\Http\Filters\EstatesFilter;


class HomeController extends Controller
{
    use CalculateDistance;


    protected function filterByLocation($request, $estates)
    {      
        if ($request->filled('latitude') && $request->filled('longitude')) {

            $estates = collect($estates->filter(
                function ($estate) use ($request) {
                $radius = $request->query('radius', 0);

                return $this->distance($estate, $request) <= $radius;
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
        dd($filteredByLocation);

        return Inertia::render('Results/Results', [
            'estates' => $filteredByLocation
        ]);
    }
}
