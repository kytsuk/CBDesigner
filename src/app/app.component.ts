import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB_mW3YQ1d4LgMGc8btFnrM4ql1AVSx05E",
      authDomain: "board-designer-39575.firebaseapp.com"
    })
  }
}
