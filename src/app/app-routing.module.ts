import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AngularComponent } from './angular/angular.component';
import { LoginComponent } from './login/login.component';
import { EmailLoginComponent } from './email-login/email-login.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { SmsLoginComponent } from './sms-login/sms-login.component';
import { GitlabLoginComponent } from './gitlab-login/gitlab-login.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'social', component: SocialLoginComponent },
  { path: 'sms', component: SmsLoginComponent },
  { path: 'email', component: EmailLoginComponent },
  { path: 'gitlab', component: GitlabLoginComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
