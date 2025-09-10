import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _error = '';

  get message() {
    return this._error;
  }

  showError(message: string) {
    console.log(message);
    this._error = message;
  }

  clearError() {
    this._error = '';
  }

  constructor() {}
}
