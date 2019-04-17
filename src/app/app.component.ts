import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentVal: number = -1;
  allVals: number[] = [];

  getIncrement(event: {increment: number}){
    this.currentVal = event.increment;
    this.allVals.push(event.increment);
  }
}
