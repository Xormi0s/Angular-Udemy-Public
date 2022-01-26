import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output("interval") intervalEmit = new EventEmitter<number>();
  interval;
  intervalNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  Start(){
    this.interval = setInterval(() =>{
      this.intervalNumber++;
      this.intervalEmit.emit(this.intervalNumber);
    }, 1000);
  }

  Stop(){
    clearInterval(this.interval);
  }
}
