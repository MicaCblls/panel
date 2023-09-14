import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-login',
  templateUrl: './panel-login.component.html',
  styleUrls: ['./panel-login.component.css'],
})
export class PanelLoginComponent {
  registerForm: boolean = false;
  constructor() {}
  showRegisterForm(value: boolean) {
    this.registerForm = value;
    console.log(this.registerForm);
  }
}
