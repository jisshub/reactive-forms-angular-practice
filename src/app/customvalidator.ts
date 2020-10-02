import { FormControl } from '@angular/forms';

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
}
