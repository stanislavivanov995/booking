<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DownloadController extends Controller
{
    public function download(string $id)
    {
        $file = Image::find($id);
        $path = Storage::path($file->path);
        return response()->download($path);
    }
}
