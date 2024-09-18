import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BackendService } from "src/app/services/backend.service";

@Component({
    selector : "header-component",
    templateUrl : "./header.component.html"
})
export class HeaderComponent { 
    togglePopup: boolean = false
    transactionForm: FormGroup
    constructor(private fb: FormBuilder, private backendService: BackendService) {
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

    onSubmit() {
        if ( this.transactionForm.invalid ) {

        } else {
            this.backendService.addTransaction(this.transactionForm.value).subscribe({
                next: (response)=>{
                    
                },
                error: ()=>{}
            })
        }
    }
}