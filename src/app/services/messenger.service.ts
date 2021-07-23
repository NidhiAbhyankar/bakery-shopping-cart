import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject();

  constructor() {}

  sendMsg(product: any) {
    //console.log(this.subject);
    this.subject.next(product); //Triggering an event
  }

  getMsg() {
    console.log(this.subject);
    return this.subject.asObservable();
  }
}
