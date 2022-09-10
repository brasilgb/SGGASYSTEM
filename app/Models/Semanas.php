<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Ciclos;

class Semanas extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_semana';

        protected $fillable = [
            'ciclo',
            'semana',
            'data_inicial',
            'data_final',
            'eclosao',
            'fertilidade',
            'producao'
        ];

        public function ciclos()
        {
            return $this->hasOne(Ciclos::class, 'id_ciclo', 'ciclo');
        }

}
