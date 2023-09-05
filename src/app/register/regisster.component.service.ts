import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { UserDetails } from '../movies';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl = 'http://localhost:4040/user';

  constructor(private http: HttpClient) { }

  addUser(user: UserDetails): any {

    return this.http.post<UserDetails>(`${this.apiUrl}/signup`, user).subscribe({
      next: data => {
        console.log('Signup successful');
      },
      error: error => {
          console.error('There was an error!', error);
      }
    })
  }
}