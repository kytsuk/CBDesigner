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
import { PanelComponent } from './core/panel/panel.component';
import { ListLayerComponent } from './list-layer/list-layer.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayerComponent,
    ShowLayerComponent,
    PanelComponent,
    ListLayerComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '' , component: HeaderComponent },
      {path: 'panel', component: LayerComponent}
      // {path: 'layer', component: LayerComponent}
    ])
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
