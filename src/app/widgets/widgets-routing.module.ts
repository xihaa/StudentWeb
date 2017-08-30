import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TchiComponent} from './tchi.component'
import { WidgetsComponent } from './widgets.component';
import {DetailComponent} from './detail.component'
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Widgets'
    },
    children: [
      {
        path: 'tchis',
        component: TchiComponent,
        data: {
          title: 'tchis'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule {}
