<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function book(Request $request)
    {
        dd($request->all());
    }
}
