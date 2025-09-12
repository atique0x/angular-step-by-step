import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { divisionList } from '../division-data';
import { UserHttpService } from '../user-http.service';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
})
export class UpdateFormComponent implements OnInit {
  updateForm!: FormGroup;
  updateUserId!: string;
  updateUserData!: User;

  today = new Date().toISOString().split('T')[0];

  genders = [
    { id: 'check-male', value: 'male', option: 'Male' },
    { id: 'check-female', value: 'female', option: 'Female' },
    { id: 'check-other', value: 'others', option: 'Prefer not to say' },
  ];

  divisions = divisionList;
  addressCities: string[][] = [];

  constructor(
    private userHttpService: UserHttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateUserId = this.route.snapshot.paramMap.get('id')!;
    this.userHttpService.getUserById(this.updateUserId).subscribe((user) => {
      this.updateUserData = user;
      console.log(this.updateUserData.addresses);
      this.initializeForm();
    });
  }

  private initializeForm() {
    this.updateForm = new FormGroup({
      phone: new FormControl(this.updateUserData.phone, [
        Validators.required,
        Validators.pattern(/^01[3-9]\d{8}$/),
      ]),

      agreement: new FormControl(false, Validators.requiredTrue),
      addresses: new FormArray(this.addressGroup()),
      skills: new FormArray(this.skillsGroup()),
    });

    this.addressCities = this.updateUserData.addresses.map((address) => {
      const division = this.divisions.find(
        (d) => d.division === address.division
      );
      return division ? division.cities : [];
    });
  }

  addressGroup() {
    return this.updateUserData.addresses.map(
      (address) =>
        new FormGroup({
          street: new FormControl(address.street),
          division: new FormControl(address.division, Validators.required),
          city: new FormControl(address.city, Validators.required),
          region: new FormControl(address.region),
          postal: new FormControl(address.postal),
        })
    );
  }

  skillsGroup() {
    return this.updateUserData.skills.map((skill) => new FormControl(skill));
  }

  get skills(): FormArray {
    return this.updateForm.get('skills') as FormArray;
  }

  get addresses(): FormArray {
    return this.updateForm.get('addresses') as FormArray;
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
        division: new FormControl(''),
        city: new FormControl(''),
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

  onUpdate() {
    const userInfo: User = this.updateForm.value;
    this.userHttpService.updateUserData(this.updateUserId, userInfo);
    this.router.navigate(['/users']);
  }
}
