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
}
