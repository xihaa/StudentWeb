/**
 * Created by lenovo on 2017/7/20.
 */
import { Component,Input , OnInit} from '@angular/core';
import {Comment} from './comment'
import {CommentService}from'./comment.service'
@Component({
  selector: 'my-comment',
  templateUrl: 'comment.component.html'
})
export class CommentComponent implements OnInit {
  @Input()
  public com: Comment;
  @Input()
  public id:object;
  constructor() { }
  add(){
    this.com.zan=this.com.zan+1;
  }
  ngOnInit() {
  }
}
