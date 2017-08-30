/**
 * Created by lenovo on 2017/7/20.
 */
import { Component, OnInit} from '@angular/core';
import {CuotiComponent}from'../components/cuoti.component'
import { ActivatedRoute, Params } from '@angular/router';
import { Location }from '@angular/common';
import {Cuoti}from'../components/cuoti';
import {cuos}from'../components/mock-cuoti';
import {One}from'./mock-single'
@Component({
  moduleId: module.id,
  templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit{
  public id:string;
  public dcuoti=One;
  public i=0;
  constructor( private route: ActivatedRoute,private location: Location) { }

  public getcuoti() {
   /* for (this.i<cuos.length);this.i++){
      if(cuos[this.i].id==this.id)
        this.dcuoti =cuos[this.i];
    }*/

  }
  ngOnInit(){
    this.route.params.subscribe((params)=>this.id=params['id']);
  }
}

