import { EmailValidator } from './../common/validators/email.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        email: [
          '',
          [Validators.required, Validators.email, EmailValidator.correctEmail]
        ],
        confirmEmail: [
          '',
          [Validators.required, Validators.email, EmailValidator.correctEmail]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$'
            )
          ]
        ],
        checkbox: ['', Validators.required]
      },
      {
        validator: EmailValidator.MatchValues('email', 'confirmEmail')
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }
}
