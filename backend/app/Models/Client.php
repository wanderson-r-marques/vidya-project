<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory; 

    protected $fillable = array('cnpj','corporate_name','fantasy_name','zipcode','adreess','number','complement','district','city','state','email','phone');

    public function products(){
        return $this->belongsToMany(Product::class)->withPivot('expiration_date')->withTimestamps();
    }
}
