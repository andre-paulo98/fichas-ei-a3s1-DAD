<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("SET foreign_key_checks=0");
        DB::table('departments')->truncate();
        DB::table('users')->truncate();
        DB::statement("SET foreign_key_checks=1");

        $this->call(DepartmentsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
    }
}
