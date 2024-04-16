import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './core/residences/residences.component';
import { ApartementsComponent } from './core/apartements/apartements.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path :"residences" , component:ResidencesComponent},
  {path:"apartements", component:ApartementsComponent},
  { path: '404', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
