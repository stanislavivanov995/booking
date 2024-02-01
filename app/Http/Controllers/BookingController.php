<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class BookingController extends Controller
{
    public function book(Request $request)
    {
        // dd($request->all());
        Reservation::create([
            'user_id' => $request->reservation_userId,
            'estate_id' => $request->reservation_estateId,
            'check_in' => $request->reservation_checkIn,
            'check_out' => $request->reservation_checkOut,
            'name' => $request->reservation_name,
            'last_name' => $request->reservation_last_name,
            'email' => $request->reservation_email,
            'phone' => $request->reservation_phone,
        ]);
    }
}
