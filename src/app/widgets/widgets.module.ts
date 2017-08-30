import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { TimuComponent } from'./timu.component'
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {TchiComponent} from './tchi.component';
/*
import { CuotiComponent } from'../components/cuoti.component';
import {CommentComponent} from'../components/comment.component';
*/
import {ComponentsModule} from'../components/components.module'
import {DetailComponent} from'./detail.component'
import {DetailRoutingModule} from './detail-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  imports: [
    ChartsModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    ModalModule.forRoot(),
    ComponentsModule,
    CommonModule,
    DetailRoutingModule,
    WidgetsRoutingModule,
  ],
  declarations: [
    WidgetsComponent,
    TimuComponent,
    TchiComponent,
    DetailComponent
  ]
})
export class WidgetsModule { }
