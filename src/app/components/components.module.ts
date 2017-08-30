import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';
import { CommonModule } from '@angular/common';
import {OneComponent}from'./one.component'
// Forms Component
import { FormsComponent } from './forms.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { CuotiComponent } from'./cuoti.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';
import { HttpModule, JsonpModule } from '@angular/http';
// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import { CuotiService } from './cuoti.service';
/*import { ProgressbarModule } from 'ngx-bootstrap/progressbar';*/
import { RlTagInputModule} from'angular2-tag-input';
import {CommentComponent} from'./comment.component'
import {CommunityComponent}from'./community.component'
import { XiangsiComponent}from'./xiangsi.component'
import { WebUploaderModule, WebUploaderConfig, Options, OptionsPick, OptionsThumb } from 'ngx-webuploader';
import {PersonComponent}from'./person.component'
import {SettingComponent}from'./setting.component'
import {HistoryComponent}from'./history.component'
import {ButtonComponent}from'./button.component'
@NgModule({
  imports: [
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RatingModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
  /*  ProgressbarModule.forRoot(),*/
    TabsModule.forRoot(),
    WebUploaderModule.forRoot(<WebUploaderConfig>{
      // 全局默认Options配置
      options: <Options>{
        swf: './assets/webuploader-0.1.5/Uploader.swf',
        server: './fileupload'
      },
      // webuploader的存储路径
      path: './assets/webuploader-0.1.5/',
      // 依赖库
      dependentLib: './assets/jquery-3.2.1.min.js'
    }),
    HttpModule,
    FormsModule,
    RlTagInputModule,
    JsonpModule,
    CommonModule
  ],
  declarations: [
    ButtonsComponent,
    OneComponent,
    CardsComponent,
    CuotiComponent,
    PersonComponent,
    FormsComponent,
    ModalsComponent,
    SettingComponent,
    SocialButtonsComponent,
    SwitchesComponent,
    TablesComponent,
    ButtonComponent,
    TabsComponent,
    CommentComponent,
    HistoryComponent,
    CommunityComponent,
    XiangsiComponent
  ],
  exports: [
    CuotiComponent,
    CommentComponent
  ]
})
export class ComponentsModule { }
