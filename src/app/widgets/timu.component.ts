/**
 * Created by lenovo on 2017/7/16.
 */
import {Component, Input, OnInit} from '@angular/core';
import { TimuService } from './timu.service';
import { Timu } from './timu';
@Component({
  providers: [TimuService],
  selector: 'my-timu',
  templateUrl: 'timu.component.html'
})
export class TimuComponent implements OnInit {
  @Input()
  public timu:Timu;
  @Input()
  public i:number;
  public URL: string;
  @Input()
  public ishid=true;
  @Input()
  public jieguo=true;
  public answer:string;
  constructor(private timuService: TimuService) {
  };
  public x= 0;
  public y = 2;
  public num= 0;
  public isright=true;
  public isCollapsed = false;
  /*public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }*/
  public collapsed(event: any): void {
    console.log(event);
  };
  public expanded(event: any): void {
    console.log(event);
  };
  public ratingStates: any = [
    {stateOn: 'fa fa-reddit-alien', stateOff: 'fa fa-star-o'},
    {stateOn: 'fa fa-reddit-alien', stateOff: 'fa fa-star-o'},
    {stateOn: 'fa fa-reddit-alien', stateOff: 'fa fa-star-o'},
    {stateOn: 'fa fa-reddit-alien'},
    {stateOff: 'fa fa-star-o'}
  ];
  add() {
    this.num = this.num + 1;
  };
  getTimus(): void {
    this.timuService.getTimus().then(timu => this.timu = timu);
  };
  ngOnInit(): void {
    this. getTimus();
  };
  result(){
    if(this.answer!=this.timu.answer){
      this.isright=false;
    }
  }

/*
  constructor(private modalService: BsModalService) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
*/
}

