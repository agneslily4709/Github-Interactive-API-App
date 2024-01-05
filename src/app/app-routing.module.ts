import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SignoutComponent } from './pages/signout/signout.component';

const routes: Routes = [
        {path:"",component:HomeComponent},
        {path:"signin",component:SigninComponent},
        {path:"signup",component:SignupComponent},
        {path:"signout",component:SignoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
