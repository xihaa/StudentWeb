/**
 * Created by lenovo on 2017/7/26.
 */
import { Component } from '@angular/core';
import {cuos} from './mock-cuoti'
import {hiscuos}from'./mock-history'
@Component({
  templateUrl: 'history.component.html'
})
export class HistoryComponent {
  public zhishidian:string;
  public zhishidians:string[]=["经济政体","时间节点","战争人物","事件意义","启示"];
  public zsdcuotis=hiscuos;
  constructor() { }
  Jadd(s:string):void{
    this.zhishidians.push(s);
  }
}
