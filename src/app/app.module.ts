import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { ListeComponent } from './components/liste/liste.component';
import { DetailsComponent } from './components/details/details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AjouterComponent } from './components/ajouter/ajouter.component';
import { AjouterReactiveFormComponent } from './components/ajouter-reactive-form/ajouter-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ListeComponent,
    DetailsComponent,
    PageNotFoundComponent,
    AjouterComponent,
    AjouterReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
