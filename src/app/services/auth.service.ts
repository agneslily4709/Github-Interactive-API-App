import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

        isLoggedIn = false;
        username:string="";
        constructor(public firebaseAuth: AngularFireAuth) {
              const userFromLocalStorage = localStorage.getItem('user');
              this.isLoggedIn = !!userFromLocalStorage;
              const userData = localStorage.getItem("user");
              this.username = userData ? JSON.parse(userData).email : null;
        }
      
        async signin(email: string, password: string) {
            const res = await this.firebaseAuth.signInWithEmailAndPassword(email, password);
            localStorage.setItem("user",JSON.stringify(res.user))        
            this.updateLoggedInStatus(res.user !== null);
        }
      
        async signup(email: string, password: string) {
            const res = await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
            this.updateLoggedInStatus(res.user !== null);
        }
      
        signout() {
          this.firebaseAuth.signOut().then(() => {
            this.updateLoggedInStatus(false);
          });
        }
      
        private updateLoggedInStatus(status: boolean): void {
          this.isLoggedIn = status;
          if (!status) {
            localStorage.removeItem('user');
          }
        }
      }
      