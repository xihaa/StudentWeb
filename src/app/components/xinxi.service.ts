import { Injectable } from '@angular/core';
import {Student}from'./student'
@Injectable()
export class XinxiService {
  public stu=new Student("时年海","•••••••••","一年级","","");
  getstu():Student{
    return this.stu;
  }
  setstu(student:Student):void{
    this.stu=student;
   /*this.stu.name=student.name;
    this.stu.keywords=student.keywords;
    this.stu.grade=student.grade;
    this.stu.classes=student.classes;
    this.stu.school=student.school;*/
  }
}
