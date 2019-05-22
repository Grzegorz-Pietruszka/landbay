import { ValidationService } from './../common/validators/validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private ValidationService: ValidationService) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group(
            {
                email: ['', [ValidationService.emailValidator, ValidationService.correctEmail]],
                confirmEmail: [''],
                password: ['', ValidationService.passwordValidator],
                pin1: ['', ValidationService.pinValidator],
                pin2: ['', ValidationService.pinValidator],
                pin3: ['', ValidationService.pinValidator],
                pin4: ['', ValidationService.pinValidator],
                pin5: ['', ValidationService.pinValidator],
                checkbox: ['', Validators.requiredTrue],
            },
            {
                validator: ValidationService.matchValues('email', 'confirmEmail'),
            },
        );
    }
    //get value of a field
    get f() {
        return this.registerForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
    }
}
