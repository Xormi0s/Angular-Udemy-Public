import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoggedIn = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if(this.isLoggedIn){
      // todo
    } else {
      this.authService.signUp(email, password).subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
      },
      error => {
        console.log(error);
        this.error = 'An error occured';
        this.isLoading = false;
      });
    }

    form.reset();
  }

}
