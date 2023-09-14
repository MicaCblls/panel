import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  constructor(private sessionSvc: SessionService) {}
  hide = true;
  form = {
    email: '',
    fullName: '',
    profileImage: '',
    phone: '',
    dni: '',
    dniType: '',
    password: '',
  };

  async onSubmit() {
    console.log(this.form, 'antes del post');
    await this.sessionSvc.registerUser(this.form);
  }
}
