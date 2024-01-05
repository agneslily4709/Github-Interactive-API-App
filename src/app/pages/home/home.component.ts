import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 userData = localStorage.getItem("user");
 userObject = this.userData ? JSON.parse(this.userData) : null;
 show = true
        constructor(public firebaseService: AuthService, public githubService:GithubService) {
        }
        handleSearch(username:string){
                this.githubService.getUserDetails(username)
                this.githubService.getUserRepos(username)
                this.show = true
         }
}
