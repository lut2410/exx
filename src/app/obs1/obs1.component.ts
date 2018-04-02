import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-obs1',
  templateUrl: './obs1.component.html',
  styleUrls: ['./obs1.component.css']
})
export class Obs1Component implements OnInit {
  text:string;
  constructor() { }

  ngOnInit() {

  }
  onInput(value){
  }
}
