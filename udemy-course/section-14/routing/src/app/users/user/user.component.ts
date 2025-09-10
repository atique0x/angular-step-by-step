import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user!: { id: number; name: string };
  route = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    console.log(this.route);
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };

    this.route.params.subscribe((params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });

    console.log(this.route.snapshot.params['id']);
  }
}
