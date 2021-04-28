import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  nameControl: FormControl;

  contactForm = new FormGroup({
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    age: new FormControl(),
  });
  private text1: any;
  private text2: any;
  private text3: any;
  private text4: any;
  ngOnInit(): void {
    this.nameControl = new FormControl('David', [Validators.required, Validators.minLength(5)]);
    this.nameControl.valueChanges.subscribe(value => console.log(value));
    this.nameControl.statusChanges.subscribe(status => console.log(status));
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    // tslint:disable-next-line:no-unused-expression
    this.text1 = this.contactForm.get('lastname').value;
    this.text2 = this.contactForm.get('email').value;
    this.text3 = this.contactForm.get('gender').value;
    this.text4 = this.contactForm.get('age').value;
    console.log(' Lastname: ' + this.text1 + ' email: ' + this.text2 + ' gender: ' + this.text3 + ' age: ' + this.text4 );
  }
}
