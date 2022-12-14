<?php

namespace App\Http\Controllers;

use App\Models\Ciclos;
use App\Models\Semanas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Database\Eloquent\Collection;

class CiclosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ciclos = Ciclos::OrderBy('ativo', 'desc')->paginate(15);
        return Inertia::render('Ciclos/index', ['ciclos' => $ciclos, 'isBack' => $isBack = 0]);
    }

    public function search(Request $request){
$ciclos = Ciclos::whereDate('data_inicial', $request->data_inicial)->OrderBy('ativo', 'desc')->paginate(15);
return Inertia::render('Ciclos/index', ['ciclos' => $ciclos, 'isBack' => $isBack = 1]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Ciclos/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Ciclos $ciclos)
    {

        $ciclo = [
            'data_inicial' => $request->data_inicial,
            'semana_inicial' => $request->semana_inicial,
            'ativo' => 1
        ];
        Ciclos::where('ativo', 1)->update(['ativo' => 0]);
        $idciclo = Ciclos::create($ciclo);

        $semana = [
            'ciclo' => $idciclo->id_ciclo,
            'semana' => $request->semana_inicial,
            'data_inicial' => $request->data_inicial
        ];

        Semanas::create($semana);

        return Redirect::route('ciclos.index')->with('message', 'Category Created Successfully');;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ciclos  $ciclos
     * @return \Illuminate\Http\Response
     */
    public function show(Ciclos $ciclos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ciclos  $ciclos
     * @return \Illuminate\Http\Response
     */
    public function edit(Ciclos $ciclos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ciclos  $ciclos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ciclos $ciclos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ciclos  $ciclos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ciclos $ciclos, $id)
    {
        $ciclos->where('id_ciclo', $id)->delete();
        return Redirect::route('ciclos.index');
    }

    /**
     * Altera ativa????o do ciclo de produ????o
     */
    public function active(Ciclos $ciclos, Request $request)
    {
        $ciclos->where('ativo', 1)->update(['ativo' => 0]);
        $ciclos->where('id_ciclo', $request->id)->update(['ativo' => $request->active]);
        return Redirect::route('ciclos.index');
    }
}
