import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oefening',
  templateUrl: './oefening.component.html',
  styleUrls: ['./oefening.component.css']
})
export class OefeningComponent implements OnInit {
  name = "";
  allowReset = false;

  constructor() { }

  ngOnInit(): void {
  }

  onNameEntered(){
    if(this.name.length > 0){
      this.allowReset = true;
    } else {
      this.allowReset = false;
    }
  }

  onReset(){
    this.name = "";
    this.allowReset = false;
  }

}
