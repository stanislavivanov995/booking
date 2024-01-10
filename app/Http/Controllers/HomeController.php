<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\Estate;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreEstateRequest;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Home');
    }
}
