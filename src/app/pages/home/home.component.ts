import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 userData = localStorage.getItem("user");
 userObject = this.userData ? JSON.parse(this.userData) : null;
 
        constructor(public firebaseService: AuthService) {
        }
}
