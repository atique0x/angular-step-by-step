import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @ViewChild('dialog') dialogEl!: ElementRef<HTMLDialogElement>;

  ngAfterViewInit() {
    this.dialogEl.nativeElement.showModal();
    console.log(this.dialogEl);
  }

  constructor() {}

  ngOnInit(): void {}
}
