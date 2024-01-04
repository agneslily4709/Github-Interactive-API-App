import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
        constructor(public firebaseService: AuthService,private router:Router) {}

        handleSignUp(email: string, password: string) {
          this.firebaseService.signup(email, password);
          this.router.navigate(["/signin"]);
        }
}
