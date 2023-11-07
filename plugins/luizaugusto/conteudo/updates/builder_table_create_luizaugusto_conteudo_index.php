<?php namespace Luizaugusto\Conteudo\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateLuizaugustoConteudoIndex extends Migration
{
    public function up()
    {
        Schema::create('luizaugusto_conteudo_index', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->boolean('status');
            $table->text('tituloprincipal');
            $table->text('textoprincipal');
            $table->string('imagemprincipal');
            $table->string('subtitulodaimagem')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('luizaugusto_conteudo_index');
    }
}
