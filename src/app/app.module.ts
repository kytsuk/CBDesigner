import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { LayerComponent } from './layer/layer.component';
import {BoardService} from "./board.service";
import { ShowLayerComponent } from './show-layer/show-layer.component';
import {RouterModule} from "@angular/router";

import { ListLayerComponent } from './list-layer/list-layer.component';
import { BoardComponent } from './board/board.component';
import { ZoomComponent } from './zoom/zoom.component';
import {DataService} from "./data.service";
import { ImageComponent } from './image/image.component';
import { ReportComponent } from './report/report.component';
import { D3BoardComponent } from './d3-board/d3-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayerComponent,
    ShowLayerComponent,
    ListLayerComponent,
    BoardComponent,
    ZoomComponent,
    ImageComponent,
    ReportComponent,
    D3BoardComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '' , component: HeaderComponent, pathMatch: 'full' },
      {path: '3D-board', component: D3BoardComponent},
      {path: 'panel', component: LayerComponent},
       {path: 'total', component: ReportComponent}
    ])
  ],
  providers: [BoardService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
