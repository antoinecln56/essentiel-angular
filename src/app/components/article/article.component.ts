import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input() titleArticle: string;
  @Input() priceArticle: number;
  @Input() textAltImg: string;
  @Input() urlImg: string;
  @Input() totalNbLike: number;
  @Input() comment: string;
  @Input() dispo: boolean;
  @Input() idArticle: number;
  @Output() info = new EventEmitter<string>();
  jaime: boolean = true;


  constructor() { }

  ngOnInit(): void { }

  onLike() {
    if (this.jaime === true) {
      this.totalNbLike++;
      this.jaime = false;
    } else {
      this.totalNbLike--;
      this.jaime = true
    }
    this.info.emit(this.titleArticle);
  }

  getColor() {
    if (this.dispo === true) {
      return "green";
    } else {
      return "red";
    }
  }
}
