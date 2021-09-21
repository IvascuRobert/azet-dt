import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { RealTimeClockService } from 'src/app/core/services/real-time-clock.service';
import { TrackByService } from 'src/app/core/services/trackBy.service';
import { IDaysOfWeek } from 'src/app/shared/interfaces.interface';
import { daysOfWeeks } from 'src/app/shared/utils';

@Component({
  selector: 'app-shop-dialog-content-schedule',
  templateUrl: './shop-dialog-content-schedule.component.html',
  styleUrls: ['./shop-dialog-content-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopDialogContentScheduleComponent implements OnInit {

  daysOfWeeks: IDaysOfWeek = daysOfWeeks
  realTimeClock$: Observable<Date>;
  dayNow = new Date().getDay();
  fromDate = new Date();
  toDate = new Date();
  currentDateIsInProgramRange: boolean;

  constructor(
    public trackByService: TrackByService,
    private realTimeClockService: RealTimeClockService) { }

  ngOnInit(): void {
    this.realTimeClock$ = this.realTimeClockService.getClock();

    // console.log(this.fromDate.setHours(08, 0, 0, 0), 'fromDate');
    // console.log(this.toDate.setHours(08, 0, 0, 0), 'toDate');
  }

}
