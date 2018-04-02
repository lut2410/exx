import { Component, OnInit } from '@angular/core';
import { ShareService } from '../service/share.service';

@Component({
  selector: 'app-obs2',
  templateUrl: './obs2.component.html',
  styleUrls: ['./obs2.component.css']
})
export class Obs2Component implements OnInit {
  TextObs: string = "";
  constructor(public shareService: ShareService) { }

  ngOnInit() {
    this.shareService.textShared.subscribe(value => {
      this.TextObs = value;
    }
    );
  }
}
