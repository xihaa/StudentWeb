/**
 * Created by lenovo on 2017/7/22.
 */
import {Cuoti}from'./cuoti'
class text{
  word?:string;
  cuoti?:Cuoti;
}
export class Community{
  constructor(
    public id: string,
    public touxiang: string,
    public date:string,
    public content:text,
    public zan:number,
    public jifen:number
   ) {}
}
