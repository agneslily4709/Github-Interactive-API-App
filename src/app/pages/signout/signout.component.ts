import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css'
})
export class SignoutComponent {
        constructor(public firebaseService: AuthService, private router:Router) {
                this.firebaseService.signout();
                localStorage.removeItem("user")
                this.router.navigate(["/signin"]);
        }
}
