import { Component } from '@angular/core';
import {Cuoti}from'./cuoti'
import {xscuos}from'./mock-xscuos'
@Component({
  templateUrl: 'xiangsi.component.html'
})
export class XiangsiComponent {
public xcuotis=xscuos;
  constructor() { }

}
/**
 * Created by lenovo on 2017/7/22.
 */
