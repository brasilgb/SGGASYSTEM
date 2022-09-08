<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTablesEstatisticas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::table('semanas', function (Blueprint $table) {
            $table->integer('ciclo')->unsigned()->after('id_semana');
            $table->foreign('ciclo')->references('id_ciclo')->on('ciclos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::table('semanas', function (Blueprint $table) {
            $table->dropForeign('semanas_ciclo_foreign');
            $table->dropColumn('ciclo');
        });
    }
}
