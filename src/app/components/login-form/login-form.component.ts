import { Component } from '@angular/core';
import { Form } from '../../interface/Form.interface';
import { NgForm } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  hide = true;
  form: Form = {
    dni: '',
    dniType: '',
    password: '',
  };
  constructor(private loginSvc: SessionService) {}

  async onSubmit({ value: formData }: NgForm) {
    console.log(formData, 'antes del post');

    const res = await this.loginSvc.loginUser(formData);
  }
}
