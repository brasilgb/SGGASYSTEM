<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTablePesosAddColumnLote extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pesos', function (Blueprint $table) {
            $table->integer('lote_id')->unsigned()->after('ciclo');
            $table->foreign('lote_id')->references('id_lote')->on('lotes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pesos', function (Blueprint $table) {
            $table->dropForeign('pesos_lote_foreign');
            $table->dropColumn('lote_id');
        });
    }
}
