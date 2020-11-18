import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent) child: ChildComponent;
  parentMsg: string = 'parentMsg';
  childMessage: string;
  childVariableReceivedThroughViewChild: string;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  eventEmitted(data){
    this.childMessage = data;
  }
  

  ngAfterViewInit(){
    this.childVariableReceivedThroughViewChild = this.child.childStaticMember;
    this.cdr.detectChanges();
  }

}
