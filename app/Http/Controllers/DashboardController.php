<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\{Estate, Reservation};
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreEstateRequest;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $totalEstates = Auth::user()->estates()->get();
        // $totalReservations = Auth::user()->reservations()->get();
        $totalReservations = Auth::user()->reservations()->with('estate')->get();
        $hostedReservations = auth()->user()->estates()->with('reservations')->get();

        return Inertia::render('Dashboard', [
            'totalEstates' => $totalEstates,
            'totalReservations' => $totalReservations,
            'hostedReservations' => $hostedReservations
        ]);
    }
}
