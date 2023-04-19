import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeArticle = [
    {
      id: 1,
      titleArticle: "Voiture",
      priceArticle: 100,
      textAltImg: "Une voiture qui va vite",
      urlImg: "https://via.placeholder.com/400x200",
      totalNbLike: 0,
      comment: "Waouh",
      dispo: false
    },
    {
      id: 2,
      titleArticle: "Moto",
      priceArticle: 80,
      textAltImg: "Une moto qui va vite",
      urlImg: "https://via.placeholder.com/400x200",
      totalNbLike: 0,
      comment: "Trop bien",
      dispo: true
    },
    {
      id: 3,
      titleArticle: "Vélo",
      priceArticle: 20,
      textAltImg: "Un vélo qui va vite",
      urlImg: "https://via.placeholder.com/400x200",
      totalNbLike: 0,
      comment: "J'adore",
      dispo: true
    },
  ]

  constructor() { }

  getArticle(id: number) {
    const articles = this.listeArticle.find((a) => {
      return a.id == id;
    })
    return articles;
  }
}
