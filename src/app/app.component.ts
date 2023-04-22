import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs'
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes;
  compteurSubscription: Subscription;
  title = 'labonneaffaire';


  constructor() { }

  ngOnInit() {
    const compteur = interval(1000).pipe(
      filter(value => value % 2 === 0),
      map(value => value % 2 === 0 ? `${value} est pair` : `${value} est impair`)
    );

    this.compteurSubscription = compteur.subscribe({
      next: (v) => this.secondes = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  ngOnDestroy(): void {
    this.compteurSubscription.unsubscribe();
  }


}
