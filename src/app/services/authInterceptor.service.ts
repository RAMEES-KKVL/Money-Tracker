import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem("token")
        if (token) {
            const authReq = req.clone({
                headers: req.headers.set("Authorization", token)
            })
            return next.handle(authReq)
        }
        return next.handle(req)
    }
}