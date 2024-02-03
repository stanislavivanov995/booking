<?php

namespace App\Exports;

use App\Models\Estate;
use App\Models\Category;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Sheet;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

use function Pest\Laravel\put;

class EstatesExport implements
    FromArray,
    ShouldAutoSize,
    WithMapping,
    WithHeadings,
    WithEvents
{
    public function array(): array
    {
        $estates = Estate::with('facilities')->get()->toArray();

        $result = [];

        foreach ($estates as $estate) {
            $category = Category::find($estate['category_id'])->name;
            $estate['category'] = $category;

            $estate['facilities'] = collect($estate['facilities'])->map(function ($value) {
                return $value == '1' ? 'Yes' : 'No';
            })->toArray();

            array_push($result, $estate);
        }
        // dd($result);

        return $result;
    }


    public function map($estate): array
    {
        return [
            $estate['name'],
            $estate['description'],
            $estate['location'],
            $estate['price'],
            $estate['currency'],
            $estate['category'],
            $estate['rooms'],
            $estate['beds'],
            $estate['arrive_hour'],
            $estate['leave_hour'],

            $estate['facilities']['wifi'],
            $estate['facilities']['parking'],
            $estate['facilities']['breakfast'],
            $estate['facilities']['lunch'],
            $estate['facilities']['dinner'],
            $estate['facilities']['swimming_pool'],
            $estate['facilities']['spa'],
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

    public function registerEvents(): array
    {
        Sheet::macro('setOrientation', function (Sheet $sheet, $orientation) {
            $sheet->getDelegate()->getPageSetup()->setOrientation($orientation);
        });

        Sheet::macro('styleCells', function (Sheet $sheet, string $cellRange, array $style) {
            $sheet->getDelegate()->getStyle($cellRange)->applyFromArray($style);
        });

        return [
            AfterSheet::class    => function (AfterSheet $event) {
                $event->sheet->setOrientation(\PhpOffice\PhpSpreadsheet\Worksheet\PageSetup::ORIENTATION_LANDSCAPE);

                $event->sheet->styleCells(
                    'A1:Q1',
                    [
                        'font' => [
                            'bold' => true
                        ],
                        'fill' => [
                            'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                            'rotation' => 90,
                            'color' => [
                                'argb' => '90CAF9',
                            ],
                        ],
                    ],
                );
            },
        ];
    }
}