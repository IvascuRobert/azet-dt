import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { EnumState } from '../enums.enum';

@Component({
  selector: 'app-product-state',
  templateUrl: './product-state.component.html',
  styleUrls: ['./product-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductStateComponent implements OnInit {

  stateTemplate = EnumState;

  @Input() productState: EnumState | null = null;
  @Input() productQuantity: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
