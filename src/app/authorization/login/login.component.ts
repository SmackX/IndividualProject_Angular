import {Component, Input, OnInit} from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ShareDataService]
})
export class LoginComponent implements OnInit {

  Name = '';
  Surname = '';
  Age = '';
  Gender = '';
  Country = '';
  profileColor: string;
  profileImage = 'https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin-300x300.jpg';
  svcNew: ShareDataService;
  constructor(svc: ShareDataService) {
    this.svcNew = svc;
    this.Name = svc.name;
    this.Surname = svc.surname;
    this.Age = svc.age;
    this.Gender = svc.gender;
    this.Country = svc.country;
  }

  ngOnInit(): void {
    console.log('Hello from ngOnInit!');
  }
  // tslint:disable-next-line:typedef
  Update(){
    this.Name = this.svcNew.name;
    this.Surname = this.svcNew.surname;
    this.Age = this.svcNew.age;
    this.Gender = this.svcNew.gender;
    this.Country = this.svcNew.country;
    console.log('Good', this.Name, this.svcNew.getShare());
  }
}
