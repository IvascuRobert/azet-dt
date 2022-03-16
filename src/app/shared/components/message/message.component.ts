import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MessageType } from '../../enum/message-type';
import { Message } from '../../interface/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit {

  typeTemplate = MessageType;

  constructor(
    public snackBarRef: MatSnackBarRef<MessageComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: Message) { }

  ngOnInit(): void {
  }

}
