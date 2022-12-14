<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTableColetasAddColumnLoteId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('coletas', function (Blueprint $table) {
            $table->integer('lote_id')->unsigned()->after('id_coleta');
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
        Schema::table('coletas', function (Blueprint $table) {
            $table->dropForeign('coletas_lote_id_foreign');
            $table->dropColumn('lote_id');
        });
    }
}
