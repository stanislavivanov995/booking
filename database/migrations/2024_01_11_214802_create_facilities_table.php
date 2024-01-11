<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('facilities', function (Blueprint $table) {
            $table->id();
            $table->string('estate_id');
            $table->string('wifi')->default(0)->nullable();
            $table->string('parking')->default(0)->nullable();
            $table->string('breakfast')->default(0)->nullable();
            $table->string('lunch')->default(0)->nullable();
            $table->string('dinner')->default(0)->nullable();
            $table->string('swimming_pool')->default(0)->nullable();
            $table->string('spa')->default(0)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facilities');
    }
};
