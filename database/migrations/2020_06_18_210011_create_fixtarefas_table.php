<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFixtarefasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fixtarefas', function (Blueprint $table) {
            $table->increments('id_fixtarefa');
            $table->timestamp('data_inicio');
            $table->integer('ciclo');
            $table->char('descritivo');
            $table->text('descricao');
            $table->timestamp('data_termino')->nullable();
            $table->integer('situacao');
            $table->text('observacao')->nullable();
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
        Schema::dropIfExists('fixtarefas');
    }
}
