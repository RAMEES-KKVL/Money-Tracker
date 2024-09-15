import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector : "header-component",
    templateUrl : "./header.component.html"
})
export class HeaderComponent { 
    togglePopup: boolean = false
    transactionForm: FormGroup
    constructor(private fb: FormBuilder) {
        this.transactionForm = this.fb.group({
            transactionType: ['', Validators.required]
        })
    }
    addTransaction() {
        this.togglePopup = !this.togglePopup
    }
    categoryType: boolean = false

    checkingType() {
        console.log(1);
        
    }

    
}