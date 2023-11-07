<?php namespace Luizaugusto\Conteudo\Models;

use Model;

/**
 * Model
 */
class IndexModel extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'luizaugusto_conteudo_index';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
