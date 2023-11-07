<?php namespace Luizaugusto\Conteudo\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateLuizaugustoConteudoNova extends Migration
{
    public function up()
    {
        Schema::create('luizaugusto_conteudo_nova', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->date('teste');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('luizaugusto_conteudo_nova');
    }
}
