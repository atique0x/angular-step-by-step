import { Component, inject, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  standalone: false,
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  // Allow undefined since getServer() may return undefined
  server: { id: number; name: string; status: string } | undefined;

  constructor(private serversService: ServersService) {}

  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe((params) => {
    //   const id = +params['id'];
    //   this.server = this.serversService.getServer(id);
    // });
  }

  onEditServer() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
      // queryParams: this.route.snapshot.queryParams,
    });
  }
}
