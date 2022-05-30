import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DaysOfWeek } from 'src/app/shared/interface/days-of-week';
import { daysOfWeeks } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-dialog-content-schedule',
  templateUrl: './dialog-content-schedule.component.html',
  styleUrls: ['./dialog-content-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogContentScheduleComponent implements OnInit {

  daysOfWeeks: DaysOfWeek = daysOfWeeks
  realTimeClock$: Observable<Date> = of(new Date());
  dayNow = new Date().getDay();
  currentDateIsInProgramRange: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
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

  trackByValue(index: number, item: any): string {
    return item.value;
  }
}
