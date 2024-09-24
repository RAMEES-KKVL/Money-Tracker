import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageBody } from './home/home.component';
import { HeaderComponent } from './home/components/header/header.component';
import { SidebarComponent } from './home/components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/authInterceptor.service';
import { IncomePage } from './home/pages/income/income.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageBody,
    HeaderComponent,
    SidebarComponent,
    IncomePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
