<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookingRequest;
use App\Models\Reservation;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function book(Request $request)
    {
        // dd($request->all());
        Reservation::create([
            'user_id' => $request->userId,
            'estate_id' => $request->estateId,
            'check_in' => $request->checkIn,
            'check_out' => $request->checkOut,
            'name' => $request->name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
        ]);

        redirect()->route('dashboard');
    }
}
