<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class UsersTableSeeder extends Seeder
{
    private $numberOfUsers = 30;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create('pt_PT');

        $departments = DB::table('departments')->pluck('id')->toArray();
        for ($i = 0; $i < $this->numberOfUsers; ++$i) {
            DB::table('users')->insert($this->fakeUser($faker, $faker->randomElement($departments)));
        }
    }

    private function fakeUser(\Faker\Generator $faker, $departmentId)
    {
        static $password;
        $createdAt = Carbon::now()->subDays(30);
        $updatedAt = $faker->dateTimeBetween($createdAt);
        return [
            'name' => $faker->name,
            'email' => $faker->unique()->safeEmail,
            'password' => $password ?: $password = bcrypt('secret'),
            'remember_token' => Str::random(10),
            'age' => $faker->numberBetween(18, 75),
            'department_id' => $departmentId,
            'created_at' => $createdAt,
            'updated_at' => $updatedAt,
        ];
    }
}
