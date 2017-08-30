import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { RatingModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { WebUploaderModule, WebUploaderConfig, Options, OptionsPick, OptionsThumb } from 'ngx-webuploader';
// Routing Module
import { AppRoutingModule } from './app.routing';
import { ModalModule } from 'ngx-bootstrap/modal';
// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { RlTagInputModule} from'angular2-tag-input';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    RatingModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    ProgressbarModule.forRoot(),
    ModalModule.forRoot(),
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
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ChartsModule,
    HttpModule,
    FormsModule,
    RlTagInputModule,
    JsonpModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
