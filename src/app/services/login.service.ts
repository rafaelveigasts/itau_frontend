import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string, clientCredentials: string) {
    const headers = new HttpHeaders({
      clientCredentials: clientCredentials,
    });

    return this.httpClient
      .post<LoginResponse>('/api/login', { email, password }, { headers })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('token', value.token);
          sessionStorage.setItem('name', value.name);
        })
      );
  }

  register(email: string, password: string, clientCredentials: string) {
    const headers = new HttpHeaders({
      clientCredentials: clientCredentials,
    });

    return this.httpClient.post(
      '/api/register',
      { email, password },
      { headers }
    );
  }
}
