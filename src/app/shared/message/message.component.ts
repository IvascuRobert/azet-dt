import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { EnumMessageType } from '../enums.enum';
import { IMessage } from '../interfaces.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit {

  typeTemplate = EnumMessageType;

  constructor(
    public snackBarRef: MatSnackBarRef<MessageComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: IMessage) { }

  ngOnInit(): void {
  }

}
