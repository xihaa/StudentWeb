import { Component, QueryList, ViewChildren } from '@angular/core';
import {Http} from '@angular/http';
import {Timu} from "./timu";
import {tis}from'./mock-timu'
import {TimuComponent}from'./timu.component'
@Component({
  templateUrl: 'tchi.component.html'
})
export class TchiComponent {
  public ishidd= true;
  public jieguo=true;
  public timus=tis;
  public count = new Array<TimuComponent>();
  public c:number;
  public url='/#/widgets/timu.json';
  constructor(){
  }
  @ViewChildren(TimuComponent)
  Children: QueryList<TimuComponent> ;
  getCount(){
    let counts=this.Children.toArray();
    for(let i=0;i<tis.length;i++){
      counts[i].result();
      if(counts[i].answer!=tis[i].answer){
        this.count.push(counts[i]);
      }
    }

    return this.count;
  }
  over(){
    this.jieguo=!this.jieguo;
    this.getCount();
  }
  onClickMe(){
    this.ishidd=!this.ishidd;
  };
}
/**
 * Created by lenovo on 2017/7/18.
 */
