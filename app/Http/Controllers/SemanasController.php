<?php

namespace App\Http\Controllers;

use App\Models\Semanas;
use Illuminate\Http\Request;
use App\Models\Ciclos;

class SemanasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ciclos = Ciclos::where('ativo', 1)->get();
        dd($ciclos);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Semanas  $semanas
     * @return \Illuminate\Http\Response
     */
    public function show(Semanas $semanas)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Semanas  $semanas
     * @return \Illuminate\Http\Response
     */
    public function edit(Semanas $semanas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Semanas  $semanas
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Semanas $semanas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Semanas  $semanas
     * @return \Illuminate\Http\Response
     */
    public function destroy(Semanas $semanas)
    {
        //
    }
}
