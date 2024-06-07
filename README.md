# 🎮 Blazingly fast Steam Games released from 2013 to 2023 search, powered by Typesense and Laravel

This is a demo that shows how you can use [Typesense](https://github.com/typesense/typesense), along with [Laravel](https://github.com/laravel/laravel), in order to build a search index using real data from a [Postgres](https://github.com/postgres/postgres) data store.

## Tech Stack

The app was built using [Laravel Sail](https://laravel.com/docs/11.x/sail), a lightweight CLI for Laravel development using Docker, [Laravel Scout's Typesense module](https://laravel.com/docs/11.x/scout#typesense), and [Inertia.js](https://github.com/inertiajs/inertia) for building a React frontend with Typescript support, along with the <a href="https://github.com/typesense/typesense-instantsearch-adapter" target="_blank">
Typesense Adapter for react-instantsearch</a>.

## Development

To run this project locally, check out the `.env.example` file for the environment variables you'll need to configure, install the dependencies and start the Docker images:

```shell
./vendor/bin/sail up
```

Then apply the migrations:

```shell
./vendor/bin/sail sail artisan migrate
```

And source the Database:

```shell
./scripts/sourcedb.sh
```

After which you'll need to index Typesense using Laravel Scout:

```shell
sail artisan scout:import "App\Models\Game"
```

And finally spin up your server instance:

```shell
./vendor/bin/sail yarn run dev

./vendor/bin/sail artisan serve
```

Open http://localhost to see the app.

For more information, please consult both the [Typesense Documentation](https://typesense.org/docs/) and [Laravel Scout's Documentation](https://laravel.com/docs/11.x/scout) as well.

## Credits

The dataset used in this showcase is from Terenci Claramunt's ([@terencicp](https://github.com/terencicp)) public dataset of Steam Games released from 2013 up to 2023 listed here: https://www.kaggle.com/datasets/terencicp/steam-games-december-2023
