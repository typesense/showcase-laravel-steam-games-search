<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Game extends Model
{
    use HasFactory;
    use Searchable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "games";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "name",
        "release_date",
        "price",
        "positive",
        "negative",
        "app_id",
        "min_owners",
        "max_owners",
        "hltb_single",
    ];

    /**
     * Get the indexable data array for the model.
     *
     * @return array<string, mixed>
     */
    public function toSearchableArray()
    {
        return array_merge($this->toArray(), [
            "id" => (string) $this->id,
            "created_at" => $this->created_at->timestamp,
            // Use the UNIX timestamp for Typesense integration
            // https://typesense.org/docs/26.0/api/collections.html#indexing-dates
            "release_date" => $this->release_date->timestamp,
            // Cast it as string in order to query by it
            "app_id" => (string) $this->app_id,
        ]);
    }

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        "release_date" => "datetime",
        "price" => "float",
        "positive" => "integer",
        "negative" => "integer",
        "app_id" => "integer",
        "min_owners" => "integer",
        "max_owners" => "integer",
        "hltb_single" => "integer",
    ];
}
