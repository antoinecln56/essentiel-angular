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
  @Output() info = new EventEmitter<string>();


  constructor(){}

  ngOnInit(): void {}

  onLike(){
    this.totalNbLike++;
    this.info.emit(this.titleArticle);
  }
}
