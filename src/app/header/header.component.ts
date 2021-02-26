import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  headerLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OgrJsk1Xl7JTJQM1Sfh6etxQ7EZ9LQTfWg&usqp=CAU';
  ngOnInit(): void {
  }

}
