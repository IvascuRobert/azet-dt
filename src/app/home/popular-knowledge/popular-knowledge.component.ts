import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-knowledge',
  templateUrl: './popular-knowledge.component.html',
  styleUrls: ['./popular-knowledge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularKnowledgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
