import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './core/residences/residences.component';
import { ApartementsComponent } from './core/apartements/apartements.component';
import { DetailAppartmentComponentComponent } from './core/detail-appartment-component/detail-appartment-component.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';

const routes: Routes = [
  { path: "residences", component: ResidencesComponent },
  { path: "apartments", component: ApartementsComponent },
  {path : 'detail/:id', component: DetailAppartmentComponentComponent},
  {path: 'formappartment', component:FormAppartmentComponent},
  { path: "**", redirectTo: "404" } 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
