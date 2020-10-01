import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
        name: new FormControl(null),
        email: new FormControl(null),
        status: new FormControl(this.statusArray[0]),
      }),
    });
  }
  onSubmit() {
    console.log(this.projectDetailsForm);
  }
}
