import { Component, OnInit } from '@angular/core';
import { item } from '../item';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  items = item;
  text1 = ' ';
  text2 = ' ';
  text3 = ' ';
  text4 = ' ';
  text5 = ' ';


  constructor() { }

  ngOnInit(): void {
  }
  Push(): void{
    this.items.push({
      Text1: this.text1, Text2: this.text2, Text3: this.text3, Text4: this.text4, Text5: this.text5});
    // document.location.href = '/Log';
  }
}
