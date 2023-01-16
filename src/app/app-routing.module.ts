import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardpageComponent } from './cardpage/cardpage.component';
import { FormComponent } from './form/form.component';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { ParticipaComponent } from './participa/participa.component';
import { ReportsComponent } from './reports/reports.component';
import { SelecionComponent } from './selecion/selecion.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  
  },
  {
    component:ParticipaComponent,
    path:'participa'
  
  },
  {
    component:FormComponent,
    path:'form'
  
  },
  {
    component:CardpageComponent,
    path:'cardpage'
  
  },
  {
    component:GeneralComponent,
    path:'general'
  
  },
  {
    component:SelecionComponent,
    path:'selecion'
  
  },
  {
    component:ReportsComponent,
    path:'reports'
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
