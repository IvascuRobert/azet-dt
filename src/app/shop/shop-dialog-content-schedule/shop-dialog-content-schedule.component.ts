import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  realTimeClock$: Observable<Date> = of(new Date());
  dayNow = new Date().getDay();
  currentDateIsInProgramRange: boolean = false;

  constructor(
    public trackByService: TrackByService,
    private realTimeClockService: RealTimeClockService) { }

  ngOnInit(): void {
    this.realTimeClock$ = this.realTimeClockService.getClock();
    this.currentDateIsInProgramRange = this.checkIfIsOpened();
  }

  checkIfIsOpened(): boolean {
    const now = new Date();
    const from = new Date();
    const to = new Date();

    from.setHours(8, 0, 0, 0);
    to.setHours(17, 0, 0, 0);

    if ((now.getDay() === 0) || (now.getDay() === 6)) { // weekends
      return false;
    }

    if ((now < from) || (now > to)) {
      return false;
    }

    return true;
  }

}
