import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
