import {Component, ElementRef, OnInit,  Renderer} from '@angular/core';
import {BoardService} from "../board.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public clickedItemBoard: number = null;
  public showPanelInst: boolean = false;
  constructor(private boardservise: BoardService, private el : ElementRef, private render: Renderer) { }

  ngOnInit() {
  }
  clearCanvas(){
    this.boardservise.board.splice(0);
    this.showPanelInst = false;
    this.boardservise.clickeditem.splice(0);
    }
  showComand(i){
    let Select= this.el.nativeElement.querySelector('#row'+ i)
    if (this.clickedItemBoard == null){
      this.clickedItemBoard = i;
      this.render.setElementClass(Select, "active-block", true);
      this.showPanelInst = true;
    } else {
      let lastSelect = this.el.nativeElement.querySelector('#row'+ this.clickedItemBoard);
      if(this.clickedItemBoard == i){
        this.render.setElementClass(Select, "active-block", false);
        this.clickedItemBoard = null;
        this.showPanelInst = false;
      } else{
        this.render.setElementClass(lastSelect, "active-block", false);
        this.render.setElementClass(Select, "active-block", true);
        this.clickedItemBoard = i;
        this.showPanelInst = true;
      }
    }
  }

  removeItem(){
    let click = this.clickedItemBoard
    this.boardservise.board.splice(click,1);
    this.showPanelInst = !this.showPanelInst;
    this.boardservise.clickeditem.splice(click,1);
    this.showComand(click)

  }
  moveLeft(){
    if(this.clickedItemBoard === 0){
      this.showComand(0);
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
         this.showComand(this.boardservise.board.length-1);

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
    this.showComand(i)
     }
  zooming(zoom){

    for(let i = 0; i < this.boardservise.board[0].length; i++){
       if(+zoom.value > this.boardservise.zoomvalue){
        this.boardservise.heightBoard[i] += +zoom.value;
         let plus = +zoom.value - this.boardservise.zoomvalue
         this.boardservise.board[0][i].width = +this.boardservise.board[0][i].width + plus ;
        } else{
         let minus = this.boardservise.zoomvalue - +zoom.value
          this.boardservise.board[0][i].width = +this.boardservise.board[0][i].width - minus ;
         this.boardservise.heightBoard[i] -= +zoom.value;
      }
    }
    this.boardservise.zoomvalue = +zoom.value;

  }
}
