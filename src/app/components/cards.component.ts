import { Component } from '@angular/core';
import { CuotiService } from './cuoti.service';
import { Cuoti } from './cuoti';
import {cuos} from './mock-cuoti'

@Component({
  providers: [CuotiService],
  templateUrl: 'cards.component.html'
})
export class CardsComponent  {
  public cuotis=cuos;
  constructor() {
  };
}
