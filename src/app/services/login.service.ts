import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import Swal from "sweetalert2"

@Injectable({
    providedIn : "root"
})
export class LoginService {
    constructor(private route: Router) {}
    loginServiceFunction(message: string) {
        Swal.fire({
            title: message,
            text: "",
            icon: "info",
            confirmButtonColor: '#3085d6',
            confirmButtonText: "Login"
        }).then(()=> {
            localStorage.removeItem("token")
            this.route.navigate(["/auth/login"])
        })
    }
}