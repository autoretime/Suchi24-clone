<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',        
        'image',
    ];

    protected function image(): Attribute
    {
            return Attribute::make(
            get: fn ($value) => $value ? $value  : '/images/image.png'
        );
    }
}
