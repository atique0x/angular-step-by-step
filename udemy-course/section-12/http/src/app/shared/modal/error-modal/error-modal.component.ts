import { Component, inject, Input, OnInit } from '@angular/core';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css'],
})
export class ErrorModalComponent implements OnInit {
  @Input() title!: string;
  @Input() message!: string;

  private errorService = inject(ModalService);

  onClearError() {
    this.errorService.clearError();
  }
  constructor() {}

  ngOnInit(): void {}
}
