import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidator } from './customvalidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'reactive-form-project-ver2';
  projectDetailsForm: FormGroup;
  statusArray: string[] = ['stable', 'critical', 'finished'];

  ngOnInit() {
    // initialize project details form,
    this.projectDetailsForm = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        CustomValidator.invalidProjectName,
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(this.statusArray[0]),
    });
  }
  // form submit
  onSaveProject() {
    console.log(this.projectDetailsForm.value);
  }
  // validate the project name, not allow name 'Test'
  forbiddenName(arg: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (arg.value === 'Test') {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
