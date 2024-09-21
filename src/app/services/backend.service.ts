import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Environment } from "../environment/environment";
import { FailedResponsse, SuccessResponse } from "src/model/interfaces";

@Injectable({
    providedIn : "root"
})
export class BackendService {
    constructor(private http: HttpClient) {}

    addTransaction(data: object, userId: string) {
        return this.http.post<SuccessResponse | FailedResponsse >(`${Environment.url}/user/add_transaction?userId=${userId}`, data)
    }
}
