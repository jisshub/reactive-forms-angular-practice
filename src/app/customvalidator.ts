import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidator {
  // define a static method - so can call it
  // without instantiating the class.
  static invalidProjectName(control: FormControl): any {
    // if value received is Test
    if (control.value === 'Test') {
      return { invalidProjectName: true };
    } else {
      return null;
    }
  }
  // create an async validator
  static asyncInvalidProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Sample') {
          resolve({ invalidProjectName: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
  // custom validator for email - receive the input as argument
  static invalidProjectEmail(control: FormControl): any {
    if (control.value === 'test@test.com') {
      return { invalidEmail: true };
    }
    return null;
  }
  // using async validator
  static asyncInvalidEmail(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promiseVal = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'sample@sample.com') {
          resolve({ invalidEmail: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promiseVal;
  }
}
