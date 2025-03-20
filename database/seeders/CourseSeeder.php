<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Course;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        Course::create([
            'title' => 'Introduction à Laravel',
            'description' => 'Un cours pour apprendre les bases de Laravel.',
            'teacher_id' => 2, // ID de l’enseignant (teacher@test.com)
        ]);

        Course::create([
            'title' => 'Vue.js pour débutants',
            'description' => 'Découvrez Vue.js avec ce cours pratique.',
            'teacher_id' => 2,
        ]);
    }
}