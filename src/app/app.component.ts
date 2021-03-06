import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CourseContainerComponent } from './home/course-container/course-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  public ChildData = 'Hello';
  toDate = Date.now();
  // tslint:disable-next-line:typedef
  OnChange(InputValue: string){
    this.ChildData = InputValue;
  }

}
