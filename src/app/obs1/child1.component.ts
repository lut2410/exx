import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'child-1',
    template: 'child1',
    styleUrls: ['./obs1.component.css']
  })
  export class Child1Component implements OnInit {

    constructor() { }
  
    ngOnInit() {
  
    }
  }
  @NgModule({
    imports: [],
    exports:[Child1Component],
    declarations: [ Child1Component ],
    bootstrap: [ Child1Component ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class Child1Module {}
  