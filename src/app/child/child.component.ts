import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  inputText: string;
  @Input() parentMsgReceived: string;
  childToParent: string;
  @Output() childToParentEmitter = new EventEmitter<string>();
  childStaticMember: string = 'ChildStaticVariable';
  constructor(private service: SharedService) { }

  ngOnInit() {
  }

  passtoSibling() {
    this.service.changeMessage(this.inputText);
  }

  sendToParent(){
    this.childToParentEmitter.emit(this.childToParent);
  }
}
