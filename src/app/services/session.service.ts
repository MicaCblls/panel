import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/User.interface';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private apiUrl = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient) {}

  async registerUser(user: User): Promise<void> {
    const res = await axios.post(`${this.apiUrl}/`, user);
    console.log(res);
  }
  async loginUser(data: any): Promise<void> {
    const res = await axios.post(`${this.apiUrl}/auth`, data);
    console.log(res);
  }
  async logoutUser(): Promise<void> {
    const res = await axios.post(`${this.apiUrl}/logout`);
    console.log(res);
  }
}
