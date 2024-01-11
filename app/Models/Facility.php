<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Facility extends Model
{
    protected $fillable = [
        'estate_id',
        'wifi',
        'parking',
        'breakfast',
        'lunch',
        'dinner',
        'swimming_pool',
        'spa',
    ];

    use HasFactory;

    public function estate(): BelongsTo
    {
        return $this->belongsTo(Estate::class);
    }
}

