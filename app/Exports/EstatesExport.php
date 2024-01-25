<?php

namespace App\Exports;

use App\Models\Category;
use App\Models\Estate;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;


class EstatesExport implements FromCollection, ShouldAutoSize, WithMapping, WithHeadings
{
    public function collection()
    {
        $estates = Estate::with('facilities')->get();

        foreach ($estates as $estate) {
            $category = Category::find($estate->category_id)->name;
            $estate['category'] = $category;
        }

        return $estates;
    }

    public function map($estate): array
    {
        return [
            $estate->name,
            $estate->description,
            $estate->location,
            $estate->price,
            $estate->currency,
            $estate->category,
            $estate->rooms,
            $estate->beds,
            $estate->arrive_hour,
            $estate->leave_hour,

            $estate->facilities->wifi,
            $estate->facilities->parking,
            $estate->facilities->breakfast,
            $estate->facilities->lunch,
            $estate->facilities->dinner,
            $estate->facilities->swimming_pool,
            $estate->facilities->spa,
        ];
    }

    public function headings(): array
    {
        return [
            'Name',
            'Description',
            'Location',
            'Price',
            'Currency',
            'Category',
            'Rooms',
            'Beds',
            'Arrive hour',
            'Leave hour',

            'WiFi',
            'Parking',
            'Breakfast',
            'Lunch',
            'Dinner',
            'Swimming pool',
            'Spa',
        ];
    }
}
