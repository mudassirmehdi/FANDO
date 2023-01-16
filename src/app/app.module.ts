import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ParticipaComponent } from './participa/participa.component';
import { CardpageComponent } from './cardpage/cardpage.component';
import { SelecionComponent } from './selecion/selecion.component';
import { GeneralComponent } from './general/general.component';
import { ReportsComponent } from './reports/reports.component';
import { FooterComponent } from './footer/footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormComponent,
    ParticipaComponent,
    CardpageComponent,
    SelecionComponent,
    GeneralComponent,
    ReportsComponent,
    FooterComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
