import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ShareService } from '../service/share.service';
@Component({
  selector: 'app-obs1',
  templateUrl: './obs1.component.html',
  styleUrls: ['./obs1.component.css']
})
export class Obs1Component implements OnInit {
  text:string;
  constructor(public shareService: ShareService) { }

  ngOnInit() {

  }
  onInput(value){
    this.shareService.textShared.next(value);
  }
}
