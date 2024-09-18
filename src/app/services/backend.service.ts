import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Environment } from "../environment/environment";

@Injectable({
    providedIn : "root"
})
export class BackendService {
    constructor(private http: HttpClient) {}

    addTransaction(data: object) {
        return this.http.post(`${Environment.url}/user/add_transaction`, data)
    }
}