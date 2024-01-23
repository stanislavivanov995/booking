<?php

namespace App\Exports;

use App\Invoice;
use App\Models\Estate;
use Maatwebsite\Excel\Concerns\FromCollection;

class EstatesExport implements FromCollection
{
    public function collection()
    {
        return Estate::all();
    }
}