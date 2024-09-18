import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Environment } from "../environment/environment";

@Injectable({
    providedIn : "root"
})
export class UserService {
    constructor(private http: HttpClient) {}

    signup(data: object) {
        return this.http.post(`${Environment.url}/auth/signup`, data)
    }

    login(data: object) {
        return this.http.post(`${Environment.url}/auth/login`, data)
    }
}