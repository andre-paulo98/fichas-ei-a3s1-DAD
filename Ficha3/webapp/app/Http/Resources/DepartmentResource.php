<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class DepartmentResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            "name" => $this->name,
            "date" => (new Carbon($this->created_at))->toDateString(),
        ];
    }
}
