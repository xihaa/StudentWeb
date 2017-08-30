import { Component } from '@angular/core';
import { CuotiService } from './cuoti.service';
import { Cuoti } from './cuoti';
import {cuos} from './mock-cuoti'

@Component({
  providers: [CuotiService],
  templateUrl: 'social-buttons.component.html'
})
export class  SocialButtonsComponent  {
  public cuotis=cuos;
  constructor() {
  };
}
