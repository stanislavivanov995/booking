<?php

namespace Database\Seeders;
use App\Models\Category;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    
    public function run(): void
    {  
        $this->call([
            CategoriesSeeder::class,
        ]);
    }
}
