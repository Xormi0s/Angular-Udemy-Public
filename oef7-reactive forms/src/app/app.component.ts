import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputForm: FormGroup;

  ngOnInit(){
    this.inputForm = new FormGroup({
      // 'name': new FormControl(null, [Validators.required, this.normalValidator]),
      'name': new FormControl(null, Validators.required, this.asyncValidator),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'statusProject': new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.inputForm);
  }

  normalValidator(control: FormControl): {[s: string]: boolean}{
    if(control.value == "Test"){
      return {'invalidInput': true};
    }
    return null;
  }

  asyncValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value == "Test"){
          resolve({'invalidInput': true})
        } else {
          resolve(null);
        }
      }, 2500);
    })
    return promise;
  }
}
