import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

        constructor(public firebaseService: AuthService, private router:Router) {}

        handleSignIn(email: string, password: string) {
          this.firebaseService.signin(email, password);
          this.router.navigate(["/"]);
        }
}