import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthguardService } from '../services/auth-guard.service';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthguardService] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthguardService
  ]
})
export class AppRoutingModule { }
