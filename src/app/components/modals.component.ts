import { Component, ViewChild } from '@angular/core';
import {Cuoti}from'./cuoti'
import {pcuos}from'./mock-psncuoti'
import {Community}from'./community'
import { pcomu}from'./mock-pcommu'
import {Mathgzcuos}from'./mock-gzcuo-math'
@Component({
  templateUrl: 'modals.component.html'
})
export class ModalsComponent {
   /* public myModal;
    public largeModal;
    public smallModal;
    public primaryModal;
    public successModal;
    public warningModal;
    public dangerModal;
    public infoModal;*/
   public pcuos=pcuos;
   public pcommus=pcomu;
  onClick1(){
    this.pcuos=pcuos;
  }
    onClick2(){
      this.pcuos=Mathgzcuos;
    }
}
