import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  showText = false;
  totalClicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickDisplay(){
    if(this.showText == false){
      this.showText = true;
    } else {
      this.showText = false;
    }
    this.totalClicks.push(this.totalClicks.length + 1);
  }
  
}
