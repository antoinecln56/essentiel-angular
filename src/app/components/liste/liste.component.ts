import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  message: string = "";
  liste;

  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    this.liste = this.dataService.listeArticle;
  }


  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }
  
}
