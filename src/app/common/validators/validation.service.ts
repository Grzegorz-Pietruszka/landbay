import { Injectable } from '@angular/core';
import { ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class ValidationService {
    static getValidatorMessage(validatorName: string) {
        let config = {
            invalidEmail: 'Email address is invalid',
            invalidConfirmEmail: `Emails don't match`,
            invalidPassword:
                'Password must be 10 characters long and contains at least lover case letter, uppercase letter, number, special character',
            invalidPin: 'PIN is invalid',
        };
        return config[validatorName];
    }

    static emailValidator(control: AbstractControl): object | null {
        if (
            control.value.match(
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            )
        ) {
            return null;
        } else {
            return { invalidEmailAddress: true };
        }
    }

    static MatchValues(controlName: string, matchingControlName: string): object | null {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (control.value === matchingControl.value) {
                return null;
            } else {
                return { notMatch: true };
            }
        };
    }

    static correctEmail(control: AbstractControl): object | null {
        let allowedEmails = ['john@investor.com'];
        if (!allowedEmails.includes(control.value as string) && (control.value as string) !== '') {
            return { isNotAllowed: true };
        } else {
            return null;
        }
    }

    static passwordValidator(control: AbstractControl): object | null {
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { invalidPassword: true };
        }
    }
}
