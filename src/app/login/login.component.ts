import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { authenticatedresponse } from 'src/authenticatedresponse';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }
  ngOnInit() {
    
  }

  login(userEmail: string, password: string): void {
    this.authService.login(userEmail, password).subscribe(
      response => {
        // Token received, handle success
        const token = response; // The token received from the API
        // Do something with the token, such as storing it in local storage or using it for subsequent API requests
        console.log(token);
        const tokenString = JSON.stringify(token);
        localStorage.setItem('token', tokenString);
      },
      error => {
        // Handle error
        console.log(error);
      }
    );
  }


}
