<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ciclos extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_ciclo';
    public $incrementing = false;
    protected $fillable = [
        'id_ciclo',
        'semana_inicial',
        'semana_final',
        'data_inicial',
        'ativo',
        'desativacao'
    ];

}
