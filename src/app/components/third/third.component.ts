import {Component, Input, OnInit} from '@angular/core';
import {InfoCommService} from "../../services/info-comm.service";

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {
  @Input() name!: string;
  actualName = '';

  constructor(private infoCommService: InfoCommService) { }

  ngOnInit(): void {
    this.infoCommService.transporter$.subscribe((value) => {
      this.actualName = value;
    })
  }

}
