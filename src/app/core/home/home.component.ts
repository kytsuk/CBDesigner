import { Component, OnInit } from '@angular/core';
import {BoardService} from "../../board.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public boardservise: BoardService) {}

  ngOnInit() {
  }
  new(){
    this.boardservise.board = [];
    this.boardservise.finalLayer = [];
    this.boardservise.heightBoard = [];
    this.boardservise.clickeditem = [];
  }
}
