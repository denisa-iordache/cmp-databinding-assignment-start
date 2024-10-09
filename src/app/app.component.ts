import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [];
  onGameStarted(nb: { number: number}) {
    this.numbers.push({
      number: nb.number
    });
    // console.log(nb.number)
  }
}
