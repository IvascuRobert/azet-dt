import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { State } from '../../enum/state';

@Component({
  selector: 'app-product-state',
  templateUrl: './product-state.component.html',
  styleUrls: ['./product-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductStateComponent implements OnInit {

  stateTemplate = State;

  @Input() productState: State | null = null;
  @Input() productQuantity: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
