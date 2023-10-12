<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/MartinsOnuoha/laravel-vue-minimal/master/public/logo.png" width="200"></a></p>

## Laravel-Vuex-Chart

Get started quickly with Vue, Vuex, Vue-Router in Laravel.

## Setup

### Clone the repository

```bash
git clone https://github.com/MomenSamir/laravel-vuex-chart.git
```

### Install Dependencies

```bash
yarn && composer install
```

### Copy .env

```bash
cp .env.example .env
```

### Generate App Key

```bash
php artisan key:generate
```

### Start Server

```bash
php artisan serve
```

```bash
yarn run watch
```

## Project Structure

### Vue

You can find the Vue app structure under `resources/js`

```tree
📁 Components
📁 Mixins
📁 Pages
📁 Router
📁 Store
📁 Styles
  🗳 App.vue
  🗳 App.js
```

```bash
composer run-script sail
```

You should find the app running in any port value set for `APP_PORT` in `.env`.
