<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "email" => $this->email,
            "age" => $this->age,
            "department_id" => $this->department_id,
            "department" => $this->department->name,
        ];

        //return parent::toArray($request);
    }
}
