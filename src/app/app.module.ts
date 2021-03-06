import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { MainContainerComponent } from './home/main-container/main-container.component';
import { CourseContainerComponent } from './home/course-container/course-container.component';
import { FormsModule } from '@angular/forms';
import { StartCourseComponent } from './start-course/start-course.component';
import { HomeComponent } from './home/home.component';
import { MaterialComponent } from './start-course/material/material.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


const appRouter: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Start', component: StartCourseComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'LogIn', component: AuthorizationComponent },
  { path: 'Log', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    CourseContainerComponent,
    StartCourseComponent,
    HomeComponent,
    MaterialComponent,
    AuthorizationComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
