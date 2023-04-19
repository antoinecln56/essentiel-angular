import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id;
  title: string;
  price: number;
  comment: string;
  urlImg: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.id = id;
    this.title = this.dataService.getArticle(id).titleArticle;
    this.price = this.dataService.getArticle(id).priceArticle;
    this.comment = this.dataService.getArticle(id).comment;
    this.urlImg = this.dataService.getArticle(id).urlImg;
  }

}
