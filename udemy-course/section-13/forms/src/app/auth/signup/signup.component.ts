import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

function passwordCheck(control: AbstractControl) {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),

    passwords: new FormGroup(
      {
        password: new FormControl('', {
          validators: [Validators.required, Validators.minLength(4)],
        }),
        confirmPassword: new FormControl('', {
          validators: [Validators.required, Validators.minLength(4)],
        }),
      },
      {
        validators: [passwordCheck],
      }
    ),

    name: new FormGroup({
      firstName: new FormControl('', { validators: [Validators.required] }),
      lastName: new FormControl('', { validators: [Validators.required] }),
    }),

    address: new FormGroup({
      street: new FormControl('', { validators: [Validators.required] }),
      number: new FormControl('', { validators: [Validators.required] }),
      postalCode: new FormControl('', { validators: [Validators.required] }),
      city: new FormControl('', { validators: [Validators.required] }),
    }),

    role: new FormControl<
      'teacher' | 'student' | 'employee' | 'founder' | 'other'
    >('student', { validators: [Validators.required] }),

    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),

    agree: new FormControl(false, { validators: [Validators.required] }),
  });

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form);
    // const enteredEmail = this.form.value.email;
    // const enteredPassword = this.form.value.password;
    // const enteredConfirmPassword = this.form.value.confirmPassword;
    // console.log(enteredEmail, enteredPassword, enteredConfirmPassword);
  }

  onReset() {
    this.form.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
