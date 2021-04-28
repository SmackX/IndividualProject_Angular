import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  name = 'Name';
  surname = 'Surname';
  age = 'Age';
  gender = 'Gender';
  country = 'Country';
  constructor() { }
  // tslint:disable-next-line:typedef
  setShare( text1: string, text2: string, text3: string, text4: string, text5: string ){
      this.name = text1;
      this.surname = text2;
      this.age = text3;
      this.gender = text4;
      this.country = text5;
      console.log('Change: ', this.name);
  }
  // tslint:disable-next-line:typedef
  getShare(){
    console.log(
      this.name,
      this.surname,
      this.age,
      this.gender,
      this.country);
  }

 /* // tslint:disable-next-line:typedef
    setName(text: string){
      this.name = text;
    }
  // tslint:disable-next-line:typedef
    setAge(text: string){
      this.age = text;
    }
    set Surname(text: string){
      this.surname = text;
    }
    set Gender(text: string){
      this.surname = text;
    }
    set Country(text: string){
      this.country = text;
    }

  // tslint:disable-next-line:typedef adjacent-overload-signatures
    getName(){
      return this.name;
    }*/
}
