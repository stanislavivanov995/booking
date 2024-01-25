<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;


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

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(Image::class);
    }

    public function facilities(): HasOne
    {
        return $this->hasOne(Facility::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
