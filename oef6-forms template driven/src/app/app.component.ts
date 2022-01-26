import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') inputForm: NgForm;
  defaultDropdown = 'advanced';
  submitted = false;
  input = {
    mail: '',
    subscription: '',
    password: ''
  };

  onSubmit(){
    this.input.mail = this.inputForm.value.email;
    this.input.subscription = this.inputForm.value.subscription;
    this.input.password = this.inputForm.value.password;
    this.submitted = true;
    this.inputForm.reset();
  }
}
