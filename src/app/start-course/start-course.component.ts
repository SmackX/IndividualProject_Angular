import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-course',
  templateUrl: './start-course.component.html',
  styleUrls: ['./start-course.component.scss']
})
export class StartCourseComponent {

  constructor() { }
  toggle = true;
  ChangeToggle(){
    this.toggle = !this.toggle;
  }
}
