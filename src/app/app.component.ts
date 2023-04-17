import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'labonneaffaire';
  message: string = "";

  constructor(){}

  ngOnInit(){}

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }

  liste = [
    {
      titleArticle: "Voiture",
      priceArticle: 100,
      textAltImg: "Une voiture qui va vite",
      urlImg: "",
      comment: "Waouh",
      dispo: false
    },
    {
      titleArticle: "Moto",
      priceArticle: 80,
      textAltImg: "Une moto qui va vite",
      urlImg: "",
      comment: "Trop bien",
      dispo: true
    },
    {
      titleArticle: "Vélo",
      priceArticle: 20,
      textAltImg: "Un vélo qui va vite",
      urlImg: "",
      comment: "J'adore",
      dispo: true
    },
  ]
}
