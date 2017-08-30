/**
 * Created by lenovo on 2017/7/20.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from './detail.component'

const routes: Routes = [
  {
    path: 'detail/:id',
    component: DetailComponent,
    data: {
      title: 'detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule {}
