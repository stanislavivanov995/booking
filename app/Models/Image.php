<?php

namespace App\Models;

use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Prunable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Image extends Model
{
    use HasFactory;

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    protected $fillable = [
        'url',
        'path',
        'estate_id'
    ];

    public function estate(): BelongsTo
    {
        return $this->belongsTo(Estate::class, 'estate_id', 'id');
    }
}