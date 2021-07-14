import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-home-knowledge',
  templateUrl: './shop-home-knowledge.component.html',
  styleUrls: ['./shop-home-knowledge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopHomeKnowledgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
