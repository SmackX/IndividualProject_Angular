import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.scss'],
})
export class CourseContainerComponent{
    ChildText = 'The Java Weekly!';
    @Input() ChildData;
    ChangeText(){
      this.ChildText = 'Your click';
    }
}
