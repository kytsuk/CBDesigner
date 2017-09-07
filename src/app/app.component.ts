import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {TranslateService} from "ng2-translate";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor(private translate: TranslateService) {
    translate.addLangs(['En', 'Ukr', 'Ru']);
    translate.setDefaultLang('En');
    translate.use('En');
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB9-hLkj2wnOdkeRKTKNAepOiupGEpzG5s",
      authDomain: "designer-board.firebaseapp.com"
    })
  }

}
