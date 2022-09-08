<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePesosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pesos', function (Blueprint $table) {
            $table->increments('id_peso');
            $table->timestamp('data_peso');
            $table->integer('ciclo');
            $table->integer('aviario_id');
            $table->integer('semana');
            $table->decimal('femea_box1', 10,2);
            $table->decimal('femea_box2', 10,2)->nullable();
            $table->decimal('femea_box3', 10,2)->nullable();
            $table->decimal('femea_box4', 10,2)->nullable();
            $table->decimal('macho_box1', 10,2);
            $table->decimal('macho_box2', 10,2)->nullable();
            $table->decimal('macho_box3', 10,2)->nullable();
            $table->decimal('macho_box4', 10,2)->nullable();
            $table->decimal('femea', 10,2)->nullable();;
            $table->decimal('macho', 10,2)->nullable();
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
        Schema::dropIfExists('pesos');
    }
}
