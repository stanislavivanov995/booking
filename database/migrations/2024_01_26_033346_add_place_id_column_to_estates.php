<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::table('estates', function (Blueprint $table) {
            $table->string('place_id')->after('currency');
        });
    }
    
    public function down(): void
    {
        Schema::table('estates', function (Blueprint $table) {
            $table->dropColumn('place_id');
        });
    }
};