// import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { debounceTime } from 'rxjs';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent implements OnInit {
//   @ViewChild('form') form!: NgForm;

//   constructor() {}

//   ngAfterViewInit() {
//     setTimeout(() => {
//       const savedForm = localStorage.getItem('saved-login');
//       if (savedForm) {
//         const loadedFormData = JSON.parse(savedForm);
//         this.form.controls['email'].setValue(loadedFormData.email);
//       }
//     });

//     this.form.form.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
//       console.log('Form Value Changed:', value);
//       localStorage.setItem(
//         'saved-login',
//         JSON.stringify({ email: value.email, password: value.password })
//       );
//     });
//   }
//   onSubmit(formData: NgForm) {
//     if (formData.form.invalid) return;

//     console.log(formData);
//     const enteredEmail = formData.form.value.email;
//     const enteredPassword = formData.form.value.password;
//     console.log(enteredEmail, enteredPassword);
//     formData.form.reset();
//   }

//   ngOnInit(): void {}
// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// function passwordValidity(con: AbstractControl) {
//   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//   return passwordRegex.test(con.value) ? null : { weekPassword: true };
// }

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        // passwordValidity,
      ],
    }),
  });

  get emailIsInvalid() {
    return this.form.controls.email.dirty && this.form.controls.email.invalid;
  }

  get passwordIsInvalid() {
    return (
      this.form.controls.password.dirty && this.form.controls.password.invalid
    );
  }

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value.email);
    console.log(this.form.value.password);
  }

  constructor() {}

  ngOnInit(): void {
    const savedForm = localStorage.getItem('saved-login');
    if (savedForm) {
      const loddedFormData = JSON.parse(savedForm);
      // this.form.controls.email.setValue(loddedFormData.email);
      this.form.patchValue({
        email: loddedFormData.email,
      });
    }

    this.form.valueChanges.pipe().subscribe({
      next: (value) => {
        localStorage.setItem('saved-login', JSON.stringify(value));
      },
    });
  }
}
