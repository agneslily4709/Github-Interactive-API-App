import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.css'
})
export class ReposComponent {
        constructor(public githubService:GithubService){}
}
