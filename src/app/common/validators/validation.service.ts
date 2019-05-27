import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class ValidationService {
    static emailValidator(control: AbstractControl): ValidationErrors | null {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(control.value)) {
            return { emailIsInvalid: true };
        } else {
            return null;
        }
    }

    static correctEmail(control: AbstractControl): ValidationErrors | null {
        let allowedEmails = ['john@investor.com'];
        if (!allowedEmails.includes(control.value as string) && (control.value as string) !== '') {
            return { notAllowedEmail: true };
        } else {
            return null;
        }
    }

    static matchValues(controlName: string, matchingControlName: string): ValidationErrors | null {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (control.value !== matchingControl.value) {
                return { notMatch: true };
            } else {
                return null;
            }
        };
    }

    static passwordValidator(control: AbstractControl) {
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$/;
        if (!regex.test(control.value)) {
            return { wrongPassword: true };
        } else {
            return null;
        }
    }

    static pinValidator(control: AbstractControl) {
        const regex = /^[0-9]{1}$/;
        if (!regex.test(control.value)) {
            return { wrongPin: true };
        } else {
            return null;
        }
    }

    static termsConditions(control: AbstractControl) {
        if (control.value.checked) {
            alert('is checked');
        }
    }
}
