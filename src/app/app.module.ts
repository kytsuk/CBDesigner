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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayerComponent,
    ShowLayerComponent,
    ListLayerComponent,
    BoardComponent,
    ZoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '' , component: HeaderComponent, pathMatch: 'full' },
      //{path: 'home', component: HeaderComponent},
      {path: 'panel', component: LayerComponent}
      // {path: 'layer', component: LayerComponent}
    ])
  ],
  providers: [BoardService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
