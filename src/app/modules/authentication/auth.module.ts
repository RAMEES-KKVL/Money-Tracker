import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SignupPage } from "./pages/signup/signup.component";
import { LoginPage } from "./pages/login/login.component";

const routes: Routes = [
    {
        path : "signup",
        component : SignupPage
    },
    {
        path : "login",
        component : LoginPage
    }
]

@NgModule({
    declarations: [
        SignupPage,
        LoginPage
    ],
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
    ],
    providers: []
})
export class AuthModule {}