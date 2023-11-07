<?php namespace Luizaugusto\Conteudo\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateLuizaugustoConteudoIndex extends Migration
{
    public function up()
    {
        Schema::table('luizaugusto_conteudo_index', function($table)
        {
            $table->text('slug');
        });
    }
    
    public function down()
    {
        Schema::table('luizaugusto_conteudo_index', function($table)
        {
            $table->dropColumn('slug');
        });
    }
}
