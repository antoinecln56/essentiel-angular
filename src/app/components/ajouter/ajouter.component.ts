import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent {
  titleToAdd = '';
  priceToAdd = '';

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    const newTitle = this.titleToAdd;
    const newPrice = this.priceToAdd;
    console.log("newTitle : " + newTitle);
    console.log("newPrice : " + newPrice);
  }
}
