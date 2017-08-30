/**
 * Created by lenovo on 2017/7/22.
 */
import {Component, Input} from '@angular/core';
import {Community} from'./community'
import {Cuoti}from'./cuoti'
/*import {commucuo}from'./mock-commucuoti'*/

@Component({
  selector: 'my-community',
  templateUrl: 'community.component.html'
})
export class CommunityComponent {
  @Input()
  public commu: Community;
    /*  public comcuoti= commucuo;*/
  constructor() { }

}
