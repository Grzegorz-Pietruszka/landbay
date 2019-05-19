import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidator {
  static correctEmail(control: AbstractControl): ValidationErrors | null {
    let allowedEmails = ['john@investor.com'];
    if (
      !allowedEmails.includes(control.value as string) &&
      (control.value as string) !== ''
    ) {
      return { isNotAllowed: true };
    } else {
      return null;
    }
  }
  static MatchValues(
    controlName: string,
    matchingControlName: string
  ): ValidationErrors | null {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ notMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
