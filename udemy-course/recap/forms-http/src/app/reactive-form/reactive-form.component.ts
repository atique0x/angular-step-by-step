import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { address, divisionList } from './division-data';
import { User } from './user.model';
import { UserHttpService } from './user-http.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  today = new Date().toISOString().split('T')[0];

  reactiveForm!: FormGroup;

  genders = [
    { id: 'check-male', value: 'male', option: 'Male' },
    { id: 'check-female', value: 'female', option: 'Female' },
    { id: 'check-other', value: 'others', option: 'Prefer not to say' },
  ];

  divisions = divisionList;
  address = address;
  addressCities: string[][] = [];

  constructor(private userHttpService: UserHttpService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.setupFormListeners();
  }

  private initializeForm() {
    this.reactiveForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('Mr. ', [Validators.required]),
        lastName: new FormControl(''),
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^01[3-9]\d{8}$/),
      ]),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('male', Validators.required),
      agreement: new FormControl(false),

      addresses: new FormArray([
        new FormGroup({
          street: new FormControl(''),
          division: new FormControl('', Validators.required),
          city: new FormControl('', Validators.required),
          region: new FormControl(''),
          postal: new FormControl(''),
        }),
      ]),

      skills: new FormArray([new FormControl('')]),
    });
  }

  private setupFormListeners() {
    const firstNameControl = this.reactiveForm.get('name.firstName');

    this.reactiveForm.get('gender')?.valueChanges.subscribe((gender) => {
      if (!firstNameControl) return;

      let currentName = firstNameControl.value || '';
      currentName = currentName.replace(/^Mr\. |^Mrs\. /, '');

      if (gender === 'male') {
        firstNameControl.setValue(`Mr. ${currentName}`);
      } else if (gender === 'female') {
        firstNameControl.setValue(`Mrs. ${currentName}`);
      } else {
        firstNameControl.setValue(currentName);
      }
    });
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  get addresses(): FormArray {
    return this.reactiveForm.get('addresses') as FormArray;
  }

  onAddInput() {
    this.skills.push(new FormControl(''));
  }

  onDeleteInput(index: number) {
    if (this.skills.length > 1) this.skills.removeAt(index);
  }

  onAddAddress() {
    this.addresses.push(
      new FormGroup({
        street: new FormControl(''),
        division: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        region: new FormControl(''),
        postal: new FormControl(''),
      })
    );
  }

  onRemoveField(index: number) {
    if (this.addresses.length > 1) this.addresses.removeAt(index);
  }

  onDivisionChange(event: any, index: number) {
    const division = this.divisions.find(
      (d) => d.division === event.target.value
    );
    if (division) this.addressCities[index] = division.cities;
  }

  onFormSubmitted() {
    const userInfo: User = this.reactiveForm.value;

    if (!userInfo.agreement) {
      alert('You must agree to the terms and conditions before submitting.');
      return;
    }
    this.userHttpService.createUser(userInfo);
    this.formReset();
  }

  formReset() {
    this.reactiveForm.reset({ gender: 'male' }); // reset the main form

    (this.reactiveForm.get('addresses') as FormArray).controls.forEach(
      (group: any) => {
        group.reset({ division: '', city: '' }); // reset each address
      }
    );
  }
}
