import { Component ,OnInit} from '@angular/core';
import { CuotiService } from './cuoti.service';
import { Cuoti } from './cuoti';
import {cuos} from './mock-cuoti'
import {IdlistService}from'./idlist.service'
@Component({
  providers: [IdlistService],
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent implements OnInit {
  public cuotis = cuos;
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
