<?php namespace Luizaugusto\Conteudo\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteLuizaugustoConteudoNova extends Migration
{
    public function up()
    {
        Schema::dropIfExists('luizaugusto_conteudo_nova');
    }
    
    public function down()
    {
        Schema::create('luizaugusto_conteudo_nova', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->date('teste');
        });
    }
}
