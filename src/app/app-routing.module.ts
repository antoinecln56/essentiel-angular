import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './components/liste/liste.component';
import { DetailsComponent } from './components/details/details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AjouterComponent } from './components/ajouter/ajouter.component';

const routes: Routes = [
  {path:"", component: ListeComponent},
  {path:"liste", redirectTo: ""},
  {path:"details/:id", component: DetailsComponent},
  {path:"ajouter", component: AjouterComponent},
  {path:"**", component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
