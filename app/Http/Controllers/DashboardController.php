<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\{Estate, Reservation, User};
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreEstateRequest;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $totalEstates = Auth::user()->estates()->get();
        $totalReservations = Auth::user()->reservations()->with('estate')->get();
        $hostedReservations = $reservations = Reservation::whereHas('estate.user', function ($query) use ($user) {
            $query->where('users.id', $user->id);
        })
        ->with('estate')
        ->get();


        return Inertia::render('Dashboard', [
            'totalEstates' => $totalEstates,
            'totalReservations' => $totalReservations,
            'hostedReservations' => $hostedReservations
        ]);
    }
}
