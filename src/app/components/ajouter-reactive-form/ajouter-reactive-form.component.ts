import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouter-reactive-form',
  templateUrl: './ajouter-reactive-form.component.html',
  styleUrls: ['./ajouter-reactive-form.component.scss']
})
export class AjouterReactiveFormComponent implements OnInit {
  titleToAdd = new FormControl();
  priceToAdd = new FormControl();

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    const newTitle = this.titleToAdd.value;
    const newPrice = this.priceToAdd.value;
    console.log("newTitle : " + newTitle);
    console.log("newPrice : " + newPrice);
  }
}
