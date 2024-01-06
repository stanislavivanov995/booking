<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('estates', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('location')->nullable();
            $table->integer('price');
            $table->string('currency');
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->smallInteger('category_id');
            $table->smallInteger('rooms');
            $table->string('arrive_hour')->nullable();
            $table->string('leave_hour')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estates');
    }
};
