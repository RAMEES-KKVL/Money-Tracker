import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageBody } from './home/home.component';

const routes: Routes = [
  {
    path : "",
    component : HomepageBody
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
