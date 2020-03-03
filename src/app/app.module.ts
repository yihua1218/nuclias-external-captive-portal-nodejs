import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SmsLoginComponent } from './sms-login/sms-login.component';
import { EmailLoginComponent } from './email-login/email-login.component';
import { GitlabLoginComponent } from './gitlab-login/gitlab-login.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    WelcomeComponent,
    LoginComponent,
    SmsLoginComponent,
    EmailLoginComponent,
    GitlabLoginComponent,
    SocialLoginComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
