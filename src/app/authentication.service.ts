import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   // Replace with your API endpoint to generate token

   // Replace with your API base URL
  private apiUrl =  `https://localhost:7182/api/Token`

  constructor(private http: HttpClient) { }

  login(userEmail: string, password: string): Observable<any> {
    const userData = {
      UserEmail: userEmail,
      Password: password
    };

    return this.http.post<any>(`${this.apiUrl}`, userData).pipe(
      tap(response => {
        console.log('API response:', response);
      console.log('Token:', response.token);
      // Store the token in local storage
      try {
        localStorage.setItem('token', response.token);
        console.log('Token stored in local storage');
        const storedToken = localStorage.getItem('token');
       console.log('Retrieved token from local storage:', storedToken);
      } catch (error) {
        console.error('Error storing token in local storage:', error);
      }
      }))
  }

  
}
