import { Component, OnInit } from '@angular/core';
import { item } from '../item';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  items = item;
  profileImage = 'https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin-300x300.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
