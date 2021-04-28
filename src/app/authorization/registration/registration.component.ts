import {Component, OnInit, Output} from '@angular/core';
import * as EventEmitter from 'events';
import {LoggingService} from '../../services/logging.service';
import {ShareDataService} from '../../services/share-data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [LoggingService, ShareDataService]
})
export class RegistrationComponent implements OnInit {
  public text1 = ' ';
  public text2 = ' ';
  public text3 = ' ';
  public text4 = ' ';
  public text5 = ' ';
  @Output() PushFromParent = new EventEmitter();

  svcNew: ShareDataService;
  constructor(svc: ShareDataService, private logging: LoggingService) {
    this.svcNew = svc;
  }
  reg = 'Register';
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  Push(Text1: string, Text2: string, Text3: string, Text4: string, Text5: string){
    this.PushFromParent.emit({
      Shere1: Text1,
      shere2: Text2,
      shere3: Text3,
      shere4: Text4,
      shere5: Text5,
    });
    this.logging.logStatus(Text1, this.reg);
    this.svcNew.setShare(Text1, Text2, Text3, Text4, Text5);
  }
}
