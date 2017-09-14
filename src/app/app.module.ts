import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

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
import { AboutBoardComponent } from './core/about-board/about-board.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { TemplateComponent } from './core/template/template.component';

import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {AuthModule} from "./auth/auth.module";
import {AddTemplateComponent} from "./core/add-template/add-template.component";
import {TranslateLoader, TranslateModule, TranslateStaticLoader} from "ng2-translate";
import { ContactComponent } from './core/contact/contact.component';
export function httpFactory(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}
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
    D3BoardComponent,
    AboutBoardComponent,
    HomeComponent,
    FooterComponent,
    TemplateComponent,
    AddTemplateComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AuthModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: httpFactory ,
      deps: [Http]
    }),
    RouterModule.forRoot([
      {path: '' , component: HomeComponent, pathMatch: 'full' },
      {path: '3D-board', component: D3BoardComponent},
      {path: 'panel', component: LayerComponent},
       {path: 'total', component: ReportComponent},
      {path: 'about', component: AboutBoardComponent},
      {path: 'template', component: TemplateComponent},
      {path: 'add-template', component: AddTemplateComponent, canActivate: [AuthGuardService]},
      {path: 'contact', component: ContactComponent}
    ])
  ],
  providers: [BoardService, DataService, AuthService, AuthGuardService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [BrowserModule, HttpModule, TranslateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
