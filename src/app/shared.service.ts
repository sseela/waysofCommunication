import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageService = new BehaviorSubject<string>('default');
  msgObs = this.messageService.asObservable();
  constructor() { }

  changeMessage(msg: string) {
    this.messageService.next(msg);
  }
}
