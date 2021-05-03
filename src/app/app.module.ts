import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CgDataService } from './cg-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderDataComponent } from './header-data/header-data.component';
import { LoginComponent } from './login/login.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmpComponent } from './emp/emp.component';
import { BasicAuthHtppInterceptorService } from './services/basic-auth-htpp-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderDataComponent,
    LoginComponent,
    LeftBarComponent,
    RightBarComponent,
    RegisterComponent,
    HomeComponent,
    EmpComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BasicAuthHtppInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
