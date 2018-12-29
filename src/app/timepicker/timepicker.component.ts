import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent {
  time = { hour: 13, minute: 30 };
  timespinner = { hour: 13, minute: 30 };
  meridian = true;
  times: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  seconds = true;
  spinners = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  toggleSpinners() {
    this.spinners = !this.spinners;
  }
}
