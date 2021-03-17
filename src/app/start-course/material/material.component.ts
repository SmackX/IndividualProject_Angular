import { Component, OnInit } from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  ChileText = 'The “Learn Spring Security” course focuses on both the Core of Spring Security and the new OAuth2 stack in Spring  Security 5';
  constructor() { }

  ngOnInit(): void {
  }
  TextUp(){
  }
}
