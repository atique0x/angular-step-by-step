import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { noSpaceValidator } from './custom.validators';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  disableRemoveAddress = false;
  genders = [
    {
      id: 'check-male',
      value: 'male',
      option: 'Male',
    },
    {
      id: 'check-female',
      value: 'female',
      option: 'Female',
    },
    {
      id: 'check-other',
      value: 'others',
      option: 'Prefer not to say',
    },
  ];

  reactiveForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', [Validators.required, noSpaceValidator]),
        lastName: new FormControl('', [Validators.required]),
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      dateOfBirth: new FormControl(''),
      username: new FormControl(''),
      gender: new FormControl('male'),
      agreement: new FormControl(false),
      addresses: new FormArray([
        new FormGroup({
          street: new FormControl(''),
          country: new FormControl(''),
          city: new FormControl('country'),
          region: new FormControl(''),
          postal: new FormControl(''),
        }),
      ]),
      skills: new FormArray([new FormControl()]),
    });

    this.reactiveForm
      .get('name.firstName')
      ?.valueChanges.pipe(debounceTime(1000))
      .subscribe((val) => {
        console.log(val);
      });
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  get addresses() {
    return this.reactiveForm.get('addresses') as FormArray;
  }

  onAddInput() {
    const skills = this.reactiveForm.get('skills') as FormArray | null;
    if (skills) {
      console.log(skills.controls.push(new FormControl('')));
    }
  }

  onDeleteInput(pos: number) {
    const skills = this.reactiveForm.get('skills') as FormArray | null;
    if (skills) {
      if (skills.controls.length > 1) {
        skills.controls.splice(pos, 1);
      }
    }
  }

  onAddAddress() {
    const address = this.reactiveForm.get('addresses') as FormArray | null;
    if (address) {
      address.controls.push(
        new FormGroup({
          street: new FormControl(''),
          country: new FormControl(''),
          city: new FormControl(''),
          region: new FormControl(''),
          postal: new FormControl(''),
        })
      );
    }
  }

  onRemoveField(pos: number) {
    const address = this.reactiveForm.get('address') as FormArray | null;
    if (address) {
      if (address.controls.length > 1) {
        address.controls.splice(pos, 1);
      }
    }
  }

  onFormSubmitted() {
    console.log('Submitted');
    console.log(this.reactiveForm);
    this.reactiveForm.reset({
      name: {
        firstName: '',
        lastName: '',
      },
      email: '',
      phone: '',
      dateOfBirth: '',
      username: '',
      gender: 'male',
      agreement: false,
      addresses: [
        {
          street: '',
          country: '',
          city: '',
          region: '',
          postal: '',
        },
      ],
      skills: '',
    });
  }
}
