<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstoqueOvosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estoque_ovos', function (Blueprint $table) {
            $table->increments('id_estoque');
            $table->integer('ciclo');
            $table->timestamp('data_estoque');
            $table->integer('incubaveis');
            $table->integer('comerciais');
            $table->integer('postura_dia');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP')); 
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estoque_ovos');
    }
}
