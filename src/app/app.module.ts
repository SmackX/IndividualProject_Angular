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


const appRouter: Routes = [
  { path: '', component: AppComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Start', component: StartCourseComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    CourseContainerComponent,
    StartCourseComponent,
    HomeComponent,
    MaterialComponent,
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
