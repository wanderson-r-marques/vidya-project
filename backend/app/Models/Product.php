<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = array('name', 'descrition', 'version');

    public function clients(){
        return $this->belongsToMany(Client::class)->withPivot('expiration_date')->withTimestamps();
    }
}
