import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageBody } from './home/home.component';
import { AuthGuard } from './services/authGuard.service';

const routes: Routes = [
  {
    path : "",
    canActivate : [AuthGuard],
    component : HomepageBody
  },
  {
    path : "auth",
    loadChildren: ()=> import("./modules/authentication/auth.module").then( m => m.AuthModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
