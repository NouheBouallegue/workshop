import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './core/residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormResidenceComponent } from './core/form-residence/form-residence.component';
import { ApartementsComponent } from './core/apartements/apartements.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailAppartmentComponentComponent } from './core/detail-appartment-component/detail-appartment-component.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';


@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    FormResidenceComponent,
    ApartementsComponent,
    NotFoundComponent,
    DetailAppartmentComponentComponent,
    FormAppartmentComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
