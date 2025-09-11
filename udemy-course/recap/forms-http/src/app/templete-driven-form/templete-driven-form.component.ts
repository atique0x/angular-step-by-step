import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Address {
  street: string;
  country: string;
  city: string;
  region: string;
  postal: number;
}

@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
  styleUrls: ['./templete-driven-form.component.css'],
})
export class TempleteDrivenFormComponent implements OnInit {
  @ViewChild('registrationForm') form!: NgForm;
  disableRemoveAddress = false;

  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  dates = '';
  username = '';
  gender = '';
  address: Address[] = [];
  agreement = false;

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

  addresses = [
    {
      street: '',
      country: '',
      city: '',
      region: '',
      postal: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addAddress() {
    this.addresses.push({
      street: '',
      country: '',
      city: '',
      region: '',
      postal: '',
    });
    this.disableRemoveAddress = true;
  }

  onRemoveField(index: number) {
    this.addresses.splice(index, 1);
    if (this.addresses.length === 1) {
      this.disableRemoveAddress = false;
      console.log('A');
    }
  }

  onFormSubmit() {
    console.log(this.form);
    this.firstName = this.form.value.firstName;
    this.lastName = this.form.value.lastName;
    this.email = this.form.value.email;
    this.phone = this.form.value.phone;
    this.dates = this.form.value.date;
    this.username = this.form.value.username;
    this.gender = this.form.value.gender;
    const addressObj = this.form.value.addresses;
    this.address = Object.keys(addressObj).map((key) => addressObj[key]);
    this.agreement = this.form.value.agreement ? true : false;

    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Phone:', this.phone);
    console.log('Date:', this.dates);
    console.log('Username:', this.username);
    console.log('Gender:', this.gender);
    console.log('Address:', this.address.length);
    console.log('Agreement:', this.agreement);

    // this.form.reset();
    this.addresses = [
      {
        street: '',
        country: '',
        city: '',
        region: '',
        postal: '',
      },
    ];

    // this.form.form.patchValue({
    //   addresses: {
    //     address0: {
    //       country0: '',
    //     },
    //   },
    // });
  }

  onGenerateUsername() {
    let username = '';
    if (this.firstName.length < 3) {
      username += this.firstName;
    } else {
      username += this.firstName.slice(0, 3);
    }
    if (this.lastName.length < 3) {
      username += this.lastName;
    } else {
      username += this.lastName.slice(0, 3);
    }

    if (this.dates) {
      username += new Date(this.dates).getFullYear();
    }
    username = username.toLowerCase();

    // this.form.setValue({
    //   firstName: this.form.value.firstName,
    //   lastName: '',
    //   username: username,
    //   //need all :""
    // });

    this.form.form.patchValue({
      username: username,
    });

    console.log(username);
  }
}
