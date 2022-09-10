<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ciclos extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_ciclo';

    protected $fillable = [
        'id_ciclo',
        'data_inicial',
        'semana_inicial',
        'ativo'
    ];

}
