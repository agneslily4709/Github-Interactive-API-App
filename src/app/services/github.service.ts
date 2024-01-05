import { Injectable } from '@angular/core';

interface UserDetails {
        login: string;
        id:number;
        type:string;
        url:string,
        avatar_url:string
}
interface UserRepos{
        id:number;
        name:string;
        private:boolean;
        url:string;
        html_url:string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
        userFound = false
        repoFound = false
        userDetails: UserDetails | null = null;
        userDetailsError :string | null = null;
        userReposError:string | null = null;
   userRepos: UserRepos[] = []
  constructor() { 
        
  }
  async getUserDetails(username:string){
        try {
                const response = await fetch(`https://api.github.com/search/users?q=${username}`);
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                
                if (data.total_count === 1) {
                        this.userDetails = data.items[0];
                        this.userFound = true
                }

                else if (data.total_count > 1) 
                {
                        throw new Error(`Multiple users found. Please provide a more specific username.`);
                }
                else 
                {
                        throw new Error(`No user found with the given username.`);
                }
              } catch (error) {
                this.userDetailsError = `${error}`
              }
  }
  async getUserRepos(username:string){
        try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                if(data.length > 1) {
                        this.userRepos = data.map((repo: UserRepos) => ({
                                id: repo.id,
                                name: repo.name,
                                private: repo.private,
                                html_url: repo.html_url,
                              }));
                              this.repoFound = true
                        }
                else throw new Error(`No repos found for the given username.`);
              } catch (error) {
                this.userReposError = `${error}` 
        }
        }
}

