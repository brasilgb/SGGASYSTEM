<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTableEstoqueOvosAddColumnLote extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('estoque_ovos', function (Blueprint $table) {
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
        Schema::table('estoque_ovos', function (Blueprint $table) {
            $table->dropForeign('envios_lote_foreign');
            $table->dropColumn('lote_id');
        });
    }
}
