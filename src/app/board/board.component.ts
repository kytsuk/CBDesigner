import { Component, OnInit } from '@angular/core';
import {BoardService} from "../board.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public clickedItemBoard: number;
  public showPanelInst: boolean = false;
  constructor(private boardservise: BoardService) { }

  ngOnInit() {
  }
  clearCanvas(){
    this.boardservise.board.splice(0);
    this.showPanelInst = false;
    this.boardservise.clickeditem.splice(0);
    }
  showComand(i){
    this.clickedItemBoard = i;
    this.showPanelInst = !this.showPanelInst;

  }
  removeItem(){
    this.boardservise.board.splice(this.clickedItemBoard,1);
    this.showPanelInst = !this.showPanelInst;
    this.boardservise.clickeditem.splice(this.clickedItemBoard,1);
  }
  moveLeft(){
    if(this.clickedItemBoard === this.boardservise.board.length-1){
      this.showPanelInst = !this.showPanelInst;
    } else{
      let i = this.clickedItemBoard;
      let item = this.boardservise.board[i];
      this.boardservise.board[i] = this.boardservise.board[i-1];
      this.boardservise.board[i-1] = item;
      let chCliked = this.boardservise.clickeditem[i];
      this.boardservise.clickeditem[i] = this.boardservise.clickeditem[i-1];
      this.boardservise.clickeditem[i-1] = chCliked;
      this.clickedItemBoard -= 1;
    }

  }
  moveRight(){
    if(this.clickedItemBoard === this.boardservise.board.length-1){
       this.showPanelInst = !this.showPanelInst;
    } else{
      let i = this.clickedItemBoard;
      let item = this.boardservise.board[i];
      this.boardservise.board[i] = this.boardservise.board[i+1];
      this.boardservise.board[i+1] = item;
      let chCliked = this.boardservise.clickeditem[i];
      this.boardservise.clickeditem[i] = this.boardservise.clickeditem[i+1];
      this.boardservise.clickeditem[i+1] = chCliked;
      this.clickedItemBoard += 1;

    }
  }
  rotate(){
     let i = this.clickedItemBoard;
  let item: any[] = this.boardservise.board[i];
    let revArr = new Array;
     for(let k = item.length-1; k>=0 ; k--){
      revArr.push(item[k]);
     }
    this.boardservise.board[i] = revArr;
    this.showPanelInst = !this.showPanelInst;
  }
}
