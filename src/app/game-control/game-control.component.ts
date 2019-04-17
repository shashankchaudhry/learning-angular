import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  increment: number = 0;
  @Output() incrementEvent = new EventEmitter<{
    increment: number
  }>();
  intervalHolder: number;

  constructor() { }

  ngOnInit() {
  }

  startEventEmitter(){
    this.intervalHolder = window.setInterval(()=>{
      this.incrementEvent.emit({
        increment: this.increment,
      });
      this.increment++;
    }, 1000);
  }

  stopEventEmitter(){
    window.clearInterval(this.intervalHolder);
  }

}
