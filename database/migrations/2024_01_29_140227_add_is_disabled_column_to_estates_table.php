<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
<<<<<<< HEAD:database/migrations/2024_01_29_140227_add_is_disabled_column_to_estates_table.php
    public function up(): void
    {
        Schema::table('estates', function (Blueprint $table) {
            $table->string('is_disabled')->default('0')->after('updated_at');
=======
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('estates', function (Blueprint $table) {
            $table->integer('clicks')->default(0)->after('beds');
>>>>>>> release/book-1.0:database/migrations/2024_01_29_152054_add_clicks_column_to_estates_table.php
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('estates', function (Blueprint $table) {
<<<<<<< HEAD:database/migrations/2024_01_29_140227_add_is_disabled_column_to_estates_table.php
            $table->dropColumn('is_disabled');
=======
            //
>>>>>>> release/book-1.0:database/migrations/2024_01_29_152054_add_clicks_column_to_estates_table.php
        });
    }
};

