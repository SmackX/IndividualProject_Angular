import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { MainContainerComponent } from './home/main-container/main-container.component';
import { CourseContainerComponent } from './home/course-container/course-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StartCourseComponent } from './start-course/start-course.component';
import { HomeComponent } from './home/home.component';
import { MaterialComponent } from './start-course/material/material.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './authorization/registration/registration.component';
import { LoginComponent } from './authorization/login/login.component';
import { ShareDataService } from './services/share-data.service';
import { FormComponent } from './authorization/form/form.component';
import {AuthGuardGuard} from './authorization/guard/auth-guard.guard';
import {InformComponent} from './start-course/inform/inform.component';

const appRouter: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Start', component: StartCourseComponent, canActivate: [ AuthGuardGuard  ] },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'LogIn', component: AuthorizationComponent },
  { path: 'Log', component: LoginComponent },
  { path: 'Info', component: InformComponent },
  { path: 'Reg2', component: FormComponent }
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
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter),
    ReactiveFormsModule
  ],
  providers: [ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
