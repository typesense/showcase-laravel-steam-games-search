<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("games", function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->timestamp("release_date");
            $table->float("price");
            $table->integer("positive");
            $table->integer("negative");
            $table->integer("app_id");
            $table->integer("min_owners");
            $table->integer("max_owners");
            $table->integer("hltb_single")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("games");
    }
};
