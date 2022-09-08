<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTableChecklist extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
     Schema::table('checklists', function (Blueprint $table) {
            $table->integer('ciclo')->unsigned()->after('id_checklist');
            $table->foreign('ciclo')->references('id_ciclo')->on('ciclos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::table('checklists', function (Blueprint $table) {
            $table->dropForeign('checklists_ciclo_foreign');
            $table->dropColumn('ciclo');
        });
    }
}
