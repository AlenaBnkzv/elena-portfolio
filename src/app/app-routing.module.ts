import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { ProjectComponent } from './project/project.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './shared/guard/auth.guard';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bio', component: BioComponent },
   { path: 'projects', component: ProjectComponent },
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }