import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class ValidationService {
    static emailValidator(control: AbstractControl): boolean {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(control.value);
    }

    static matchValues(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            return control.value === matchingControl.value;
        };
    }

    static correctEmail(control: AbstractControl): boolean {
        let allowedEmails = ['john@investor.com'];
        return !allowedEmails.includes(control.value as string) && (control.value as string) !== '';
    }

    static passwordValidator(control: AbstractControl): boolean {
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$/;
        return regex.test(control.value);
    }
}
