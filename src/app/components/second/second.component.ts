import {Component, Input, OnInit} from '@angular/core';
import {InfoCommService} from "../../services/info-comm.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  private myName!: string;
  showFourth = true;
  @Input() set name(name: string) {
    this.updateName(name);
  }
  get name() {
    return this.myName;
  }

  constructor(private infoCommService: InfoCommService) { }

  ngOnInit() {
    setTimeout(() => {
      this.showFourth = false;
      this.infoCommService.setValue('Carlos');
    }, 10000);

    setTimeout(() => {
      this.infoCommService.setValue('Marvin');
    }, 12000);
  }

  updateName(name: string) {
    this.myName = name.split('').reverse().join('');
    this.infoCommService.setValue(this.myName);
  }

}
