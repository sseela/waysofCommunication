import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  message: string;
  constructor(private service: SharedService) { }

  ngOnInit() {
    this.service.msgObs.subscribe(msg => this.message = msg);
  }

}
