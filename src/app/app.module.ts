import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {CgDataService} from './cg-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderDataComponent } from './header-data/header-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , 
    FormsModule
  ],
  providers: [CgDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
