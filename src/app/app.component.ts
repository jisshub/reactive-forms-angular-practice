import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive-form-project-ver2';
  projectDetailsForm: FormGroup;
  statusArray: string[] = ['stable', 'critical', 'finished'];

  ngOnInit() {
    // initialize project details form,
    this.projectDetailsForm = new FormGroup({
      projectData: new FormGroup({
        name: new FormControl(null, this.forbiddenName),
        email: new FormControl(null),
        status: new FormControl(this.statusArray[0]),
      }),
    });
  }
  // form submit
  onSubmit() {
    console.log(this.projectDetailsForm.get('projectData.name'));
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
