import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { UserDetails } from '../movies';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://localhost:4040/user';

  constructor(private http: HttpClient) { }

  addUser(user: UserDetails, router: Router): any {

    return this.http.post<string>(`${this.apiUrl}/login`, user).subscribe({
      next: data => {
        if(data == '200') {
          router.navigate(['/movieList']);
        }else{
          alert("Invalid username or password");
        }
      },
      error: error => {
          console.error('There was an error!', error);
      }
    })
  }
}