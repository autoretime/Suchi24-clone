<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $with = ['galleries', 'category'];

    protected $fillable = [
        'name',
        'description',
        'price',
        'weight',
        'image',
        'category_id',
    ];

    protected function image(): Attribute
    {
            return Attribute::make(
            get: fn ($value) => $value ? $value  : '/images/image.png'
        );
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function galleries()
    {
        return $this->hasMany(Gallery::class)->orderBy('order');
    }
}
