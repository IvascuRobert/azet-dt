import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductDataClass } from '../shared/classes.class';
import { EnumState } from '../shared/enums.enum';
import { productsMock } from '../shared/mocks';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  product: ProductDataClass;
  stateTemplate = EnumState;

  reviews = [
    {
      userName: 'Florin O. Ieremciuc',
      text: 'Mi-au plakut.',
      updated: new Date('1/1/16'),
    },
    {
      userName: 'Cezar',
      text: 'Super fain. Mai cumpar sa moara sa faca !',
      updated: new Date('1/17/16'),
    },
    {
      userName: 'Diana Cocea',
      text: 'HAMMMMM UN CAUCIUCCCCCC !!! HAMMMMMMM UN BAIETELLLLLL !!! HAMMMMM UN CAUCIUCCCCCC !!! HAMMMMMMM UN BAIETELLLLLL !!!',
      updated: new Date('1/28/16'),
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Subscribe to params so if it changes we pick it up. Could use this.route.parent.snapshot.params["id"] to simplify it.
    this.route.parent.params.subscribe((params: Params) => {
      const id = params.id;
      if (id) {
        this.product = productsMock.find((product) => product.id === id);
      }
    });
  }

  rateChange(event): void {
    console.log(event);
  }
}
