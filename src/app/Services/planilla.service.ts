import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

import { BaseCRUDService } from "./base-crud.service"

@Injectable({
    providedIn: "root"
})

export class PlanillaService extends BaseCRUDService {
    constructor(
    public httpClient:HttpClient
    ) {
        super(httpClient)

        this.setEndpoint("sheets")
    }
}
