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
  searchText: string[] = [];
  filteredAddress: (typeof address)[] = [];
  reactiveForm!: FormGroup;

  genders = [
    { id: 'check-male', value: 'male', option: 'Male' },
    { id: 'check-female', value: 'female', option: 'Female' },
    { id: 'check-other', value: 'others', option: 'Prefer not to say' },
  ];

  divisions = divisionList;
  address = [...address];
  backupAddress = [...address];

  addressCities: string[][] = [];

  constructor(private userHttpService: UserHttpService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.setupFormListeners();
    this.getSearchText(0);
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

  getSearchText(index: number) {
    const streetControl = (this.reactiveForm.get('addresses') as FormArray)
      .at(index)
      .get('street');

    streetControl?.valueChanges.subscribe((val) => {
      this.searchText[index] = val;
      this.getSearchedItems(index);
    });
  }

  getSearchedItems(index: number) {
    this.filteredAddress[index] = this.address.filter((add) =>
      add.street
        .toLowerCase()
        .includes(this.searchText[index]?.toLowerCase() || '')
    );
  }

  setStreetAddress(
    add: { street: string; city: string; division: string; postcode: number },
    index: number
  ) {
    const addressGroup = this.addresses.at(index) as FormGroup;

    addressGroup.patchValue({
      street: add.street[0].toUpperCase() + add.street.slice(1),
      division: add.division,
      city: add.city,
      postal: add.postcode,
    });

    this.address = this.address.filter((ad) => ad.street !== add.street);

    const division = this.divisions.find((d) => d.division === add.division);
    if (division) {
      this.addressCities[index] = division.cities;
    }

    this.filteredAddress[index] = [];
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  get addresses(): FormArray {
    return this.reactiveForm.get('addresses') as FormArray;
  }

  hideDropdown(index: number) {
    // Small delay so click on a suggestion still works
    setTimeout(() => {
      this.filteredAddress[index] = [];
    }, 200);
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
        postal: new FormControl(''),
      })
    );
    const newIndex = this.addresses.length - 1;
    this.getSearchText(newIndex);
  }

  onRemoveField(index: number) {
    if (this.addresses.length > 1) {
      const removedGroup = this.addresses.at(index) as FormGroup;
      const removedStreet = removedGroup.get('street')?.value;

      if (removedStreet) {
        const alreadyExists = this.address.find(
          (ad) => ad.street === removedStreet.toLowerCase()
        );
        const existAddressFromBackup = this.backupAddress.find(
          (ad) => ad.street === removedStreet.toLowerCase()
        );
        console.log(existAddressFromBackup);
        if (!alreadyExists && existAddressFromBackup) {
          this.address.push({
            street: removedStreet,
            city: existAddressFromBackup.city,
            division: existAddressFromBackup.division,
            postcode: existAddressFromBackup.postcode,
          });
        }
      }
      this.addresses.removeAt(index);
    }
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
