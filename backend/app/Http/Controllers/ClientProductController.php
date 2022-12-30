<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientProduct;
use App\Models\Product;
use Illuminate\Http\Request;

class ClientProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Client $client)
    {
        return $client->products()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Client $client)
    {
        // dd($request->all());
        $expiration_date = "2022-12-28 21:02:49";
        $product = Product::create($request->all());
        return $client->products()->attach($product->id, [
            'expiration_date' => $expiration_date
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ClientProduct  $clientProduct
     * @return \Illuminate\Http\Response
     */
    public function show(ClientProduct $clientProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ClientProduct  $clientProduct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ClientProduct $clientProduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ClientProduct  $clientProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClientProduct $clientProduct)
    {
        //
    }
}
