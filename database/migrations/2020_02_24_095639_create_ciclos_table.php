<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCiclosTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('ciclos', function (Blueprint $table) {
            $table->increments('id_ciclo');
            $table->timestamp('data_inicial');
            $table->integer('semana_inicial');
            $table->integer('semana_final');
            $table->integer('ativo');
            $table->timestamps();
            $table->timestamp('desativacao')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('ciclos');
    }

}
