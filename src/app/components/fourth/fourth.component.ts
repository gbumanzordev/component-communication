import {Component, OnDestroy, OnInit} from '@angular/core';
import {InfoCommService} from "../../services/info-comm.service";
import {Subject, Subscription, take, takeUntil} from "rxjs";

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit, OnDestroy {
  name = '';
  unsubscribe$ = new Subject();

  constructor(private infoCommService: InfoCommService) { }

  ngOnInit(): void {
    this.infoCommService.transporter$.pipe(takeUntil(this.unsubscribe$)).subscribe((val) =>{
      console.log(val);
      this.name = val;
    });

    setTimeout(() => {
      this.infoCommService.setValue('Martin');
    }, 8000)
  }

  ngOnDestroy() {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

}
