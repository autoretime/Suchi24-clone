<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->float('total_sum');
            $table->string('user_name', 18);
            $table->string('user_email', 64);
            $table->string('user_phone', 18);
            $table->string('user_adress', 64);
            $table->bigInteger('user_adress_house', 18);
            $table->bigInteger('user_adress_number', 18);
            // $table->string('delivery', 18);
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
