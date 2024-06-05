<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'games';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'release_date',
        'price',
        'positive',
        'negative',
        'app_id',
        'min_owners',
        'max_owners',
        'hltb_single',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        "release_date" => "datetime",
        "price" => "decimal:2",
        "positive" => "integer",
        "negative" => "integer",
        "app_id" => "integer",
        "min_owners" => "integer",
        "max_owners" => "integer",
    ];
}