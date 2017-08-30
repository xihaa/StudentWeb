/**
 * Created by lenovo on 2017/7/25.
 */
import { Component } from '@angular/core';
import {Cuoti}from'./cuoti'
import {pcuos}from'./mock-psncuoti'
import {Community}from'./community'
import { pcomu}from'./mock-pcommu'
import {XinxiService}from './xinxi.service'
@Component({
  templateUrl: 'person.component.html',
  providers: [XinxiService]
})
export class PersonComponent {
  public pcuos=pcuos;
  public pcommus=pcomu;
  public stu=this.xinxiService.getstu();
  constructor(private xinxiService: XinxiService) {

  }

}
