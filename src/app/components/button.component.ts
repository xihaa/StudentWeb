/**
 * Created by lenovo on 2017/8/3.
 */
import { Component ,OnInit} from '@angular/core';
import { CuotiService } from './cuoti.service';
import { Cuoti } from './cuoti';
import {Mathgzcuos} from './mock-gzcuo-math'
import {IdlistService}from'./idlist.service'
@Component({
  providers: [IdlistService],
  templateUrl: 'button.component.html'
})
export class ButtonComponent implements OnInit {
  public cuotis = Mathgzcuos;
  public idlist: string[]=["102","103","104","105","106"];

  constructor(private idlistService: IdlistService) {
  };

  ngOnInit(): void {
    /*  this.idlistService.getIdlist("生物").then(idlist=>{
     for(let i=0;i<idlist.length;i++)
     this.idlist.push(idlist[0][i])});
     };*/
  }
}
