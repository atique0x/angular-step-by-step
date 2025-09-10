import { Component, inject, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  standalone: false,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    console.log(this.route);
    this.router.navigate(['/servers'], { relativeTo: this.route });
  }
}
