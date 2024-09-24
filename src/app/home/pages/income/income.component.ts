import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BackendService } from "src/app/services/backend.service";
import { LoginService } from "src/app/services/login.service";
import { FailedResponsse, SuccessResponse, Transaction } from "src/model/interfaces";
import Swal from "sweetalert2";

@Component({
    selector : "app-income-page",
    templateUrl : "./income.component.html"
})
export class IncomePage implements OnInit {
    constructor(private backendService: BackendService, private route: Router, private loginService: LoginService) {}
    emptyList: boolean = true
    transactions: Array<Transaction> = []
    ngOnInit(): void {
        const token = localStorage.getItem("token")
        if (token) {
            this.backendService.incomeTransactions().subscribe({
                next: (response: SuccessResponse)=>{
                    if ( response.data ) {
                        this.transactions = response.data
                    } else if ( response.emptyData ) {
                        this.emptyList = true
                    }
                },
                error: (response: HttpErrorResponse)=>{
                    const failedResponse: FailedResponsse = response.error
                    if ( failedResponse.tokenExpired ) {
                        this.loginService.loginServiceFunction(failedResponse.message)
                    }
                    this.loginService.loginServiceFunction(failedResponse.message)
                }
            })
        } else {
            this.loginService.loginServiceFunction("Please login to see Income transactions")
        }
    }
}