import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './app.route';
import { WelcomeComponent } from './welcome.component';
import { RegistrationModule } from './registration/registration.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { CourseModule } from './course/course.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RegistrationModule,
    CourseModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
