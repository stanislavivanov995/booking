<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Estate extends Model
{

    protected $fillable = [
        'user_id',
        'name',
        'description',
        'location',
        'price',
        'currency',
        'latitude',
        'longitude',
        'category_id',
        'rooms',
        'arrive_hour',
        'leave_hour'
    ];

    use HasFactory;

    public function estates(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
