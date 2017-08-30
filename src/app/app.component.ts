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
      apiKey: "AIzaSyB9-hLkj2wnOdkeRKTKNAepOiupGEpzG5s",
      authDomain: "designer-board.firebaseapp.com"
    })
  }
}
