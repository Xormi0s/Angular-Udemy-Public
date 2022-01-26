import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oef4-property-event-binding-view-encapsulation';
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];


  onInterval(intervalNumber: number){
    if(intervalNumber % 2 === 0){
      this.evenNumbers.push(intervalNumber);
    } else {
      this.oddNumbers.push(intervalNumber);
    }
  }
}
