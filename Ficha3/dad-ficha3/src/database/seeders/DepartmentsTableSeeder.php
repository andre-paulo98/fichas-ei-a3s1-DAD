<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DepartmentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $departments = [
            'Ciências Jurídicas',
            'Ciências da Linguagem',
            'Engenharia do Ambiente',
            'Engenharia Civil',
            'Engenharia Eletrotécnica',
            'Engenharia Informática',
            'Engenharia Mecânica',
            'Gestão e Economia',
            'Matemática'
        ];
        $createdAt = Carbon::now()->subMonths(2);
        foreach ($departments as $department) {
            DB::table('departments')->insert([
                'name' => $department,
                'created_at' => $createdAt,
                'updated_at' => $createdAt,
            ]);
        }
    }
}
