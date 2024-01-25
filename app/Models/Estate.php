<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Prunable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Builder;


class Estate extends Model
{
    use HasFactory, Prunable;

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

    public function prunable(): Builder
    {
        return static::where('deleted_at', '!=', null);
    }
}
