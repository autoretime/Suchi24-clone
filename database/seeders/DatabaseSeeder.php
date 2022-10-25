<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        Category::create([
            'name' => 'Sport',
        ]);
        Category::create([
            'name' => 'Culture',
        ]);

        Product::create([
            'name' => 'Ball',
            'description' => 'good ',
            'price' => '126',
            'category_id' => 1
        ]);
        Product::create([
            'name' => 'Toy',
            'description' => 'ball ',
            'price' => '300',
            'category_id' => 2

        ]);
    }
}
