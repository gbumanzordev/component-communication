import { Component, OnInit } from '@angular/core';
import {InfoCommService} from "../../services/info-comm.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [InfoCommService]
})
export class MainComponent implements OnInit {
  name = 'Gerson'

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.name = 'Alvaro';
    }, 4000)
  }

}
