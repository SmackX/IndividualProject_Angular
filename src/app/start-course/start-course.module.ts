import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from '../app.component';
import {FormsModule} from '@angular/forms';
import { InfoCourseComponent } from './info-course/info-course.component';
import { InformComponent } from './inform/inform.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCourseComponent,
    InformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class StartCourseModule{}
