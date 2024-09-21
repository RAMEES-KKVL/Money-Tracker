import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BackendService } from "src/app/services/backend.service";
import { FailedResponsse, SuccessResponse } from "src/model/interfaces";
import Swal from "sweetalert2"

@Component({
    selector : "header-component",
    templateUrl : "./header.component.html"
})
export class HeaderComponent { 
    togglePopup: boolean = false
    transactionForm: FormGroup
    constructor(private fb: FormBuilder, private backendService: BackendService, private route: Router) {
        this.transactionForm = this.fb.group({
            transactionType: ["", Validators.required],
            transactionAmount: ["", Validators.required],
            transactionCategory: ["", Validators.required],
            transactionDescription: ["", Validators.required],
            transactionDate: ["", Validators.required],
        })
    }
    addTransaction() {
        this.togglePopup = !this.togglePopup
    }
    categoryType: boolean = false
    
    trTypeError: boolean = false
    trTypeTouched: boolean = false
    trTypeChange(event: Event) {
        const target = event.target as HTMLInputElement
        this.trTypeError = target.value ? false : true
        this.trTypeTouched = true

        setTimeout(() => {
            this.trTypeError = false
            this.trTypeTouched = false
        }, 3000);
    }

    trMoneyError: boolean = false
    trMoneyTouched: boolean = false
    trMoneyChange(event: Event) {
        const target = event.target as HTMLInputElement
        this.trMoneyError = target.value ? false : true
        this.trMoneyTouched = true

        setTimeout(() => {
            this.trMoneyError = false
            this.trMoneyTouched = false
        }, 3000);
    }

    trCategoryError: boolean = false
    trCategoryTouched: boolean = false
    trCategoryChange(event: Event) {
        const target = event.target as HTMLInputElement
        this.trCategoryError = target.value ? false : true
        this.trCategoryTouched = true

        setTimeout(() => {
            this.trCategoryError = false
            this.trCategoryTouched = false
        }, 3000);
    }

    trDescriptionError: boolean = false
    trDescriptionTouched: boolean = false
    trDescriptionChange(event: Event) {
        const target = event.target as HTMLInputElement
        this.trDescriptionError = target.value ? false : true
        this.trDescriptionTouched = true

        setTimeout(() => {
            this.trDescriptionError = false
            this.trDescriptionTouched = false
        }, 3000);
    }

    trDateError: boolean = false
    trDateTouched: boolean = false
    trDateChange(event: Event) {
        const target = event.target as HTMLInputElement
        this.trDateError = target.value ? false : true
        this.trDateTouched = true

        setTimeout(() => {
            this.trDateError = false
            this.trDateTouched = false
        }, 3000);
    }

    errorMessage: string = ""
    onSubmit() {
        if ( this.transactionForm.invalid ) {

        } else {
            const token = localStorage.getItem("token")
            if (token) {
                this.backendService.addTransaction(this.transactionForm.value, token).subscribe({
                    next: (response: SuccessResponse)=>{
                        Swal.fire("Transaction added successfully").then(()=> {
                            this.transactionForm.reset() 
                            this.addTransaction()
                        }) 
                    },
                    error: (response: HttpErrorResponse)=>{
                        const failedResponse: FailedResponsse = response.error
                        this.errorMessage = failedResponse.message
                        setTimeout(() => {
                            this.errorMessage = ""
                        }, 3000);
                    }
                })
            } else {
                this.route.navigate(["/auth/login"])
            }
        }
    }
}

