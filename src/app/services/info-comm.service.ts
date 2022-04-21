import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class InfoCommService {
  private transporter: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor() { }

  get transporter$() {
    return this.transporter.asObservable();
  }

  setValue(value: any) {
    this.transporter.next(value);
  }
}
