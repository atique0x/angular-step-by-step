import { Component, inject, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactived-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  standalone: false,
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string } | undefined;

  serverName = '';
  serverStatus = '';
  isEditable = false;
  savedChanges = false;

  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    this.isEditable =
      this.route.snapshot.queryParams['allowEdit'] === '1' ? true : false;

    this.route.queryParams.subscribe((qp) => {
      this.isEditable = qp['allowEdit'] === '1' ? true : false;
    });

    const id = +this.route.snapshot.params['id'];

    const fetchedServer = this.serversService.getServer(id);

    if (fetchedServer) {
      this.server = fetchedServer;
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    } else {
      console.error('Server not found!');
    }
  }

  onUpdateServer() {
    if (!this.server) {
      console.error('Cannot update — server not found');
      return;
    }

    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.savedChanges = true;
    this.router.navigate(['../', { relativeTo: this.route }]);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.isEditable) {
      return true;
    }
    if (!this.savedChanges) {
      return confirm('Do you want to change saved');
    } else {
      return true;
    }
  }
}
