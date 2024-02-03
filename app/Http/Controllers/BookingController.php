<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookingRequest;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class BookingController extends Controller
{
    public function book(Request $request)
    {
        // dd($request->all());
        Reservation::create([
            'user_id' => Auth::id(),
            'estate_id' => $request->estateId,
            'check_in' => Carbon::parse($request->checkIn),
            'check_out' => Carbon::parse($request->checkOut),
            'name' => $request->name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
        ]);

        redirect()->route('dashboard');
    }
}
