import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoardService} from "../board.service";
import {until} from "selenium-webdriver";
import elementIsDisabled = until.elementIsDisabled;

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})

export class ZoomComponent implements OnInit {
  showRange: boolean = true;
  @Input() showzoom :boolean;
  zoomValueHeight: number = 0;   //значення зуму попереднього
  zoomValueWidth: number = 0;   //значення зуму попереднього
  constructor(public boardservise: BoardService) {

  }

  ngOnInit() {

  }
  zoomingHeight(zoom, height){
   if(height){
     let item:number[]=[];
     let plus = +(+zoom - this.zoomValueHeight) ;
     let minus = (this.zoomValueHeight - +zoom);
     if(+zoom.value > this.zoomValueHeight) {
       for (let i = 0; i < this.boardservise.board.length; i++) {
         this.boardservise.heightBoard[i] +=  plus;
        }
     }
     else
     {
       for (let i = 0; i < this.boardservise.board.length; i++) {
             this.boardservise.heightBoard[i] -= minus;
       }
     }
     this.zoomValueHeight = +zoom;
   }
  }

  zoomingWidth(zoom, width){
    if(width){
      let item:any[]=[];
      let plus = +(+zoom - this.zoomValueWidth) ;
      let minus = (this.zoomValueWidth - +zoom);
      for (let i = 0; i < this.boardservise.board.length; i++) {
        for (let j = 0; j < this.boardservise.board[i].length; j++) {
          item.push(+this.boardservise.board[i][j].width);
        }
      }

      if(+zoom.value > this.zoomValueWidth) {
        for (let i = 0; i < this.boardservise.board.length; i++) {
          for (let j = 0; j < this.boardservise.board[i].length; j++) {
              this.boardservise.board[i][j].width = +item[i*j] + plus;
            }
        }
      }
      else
      {
        for (let i = 0; i < this.boardservise.board.length; i++) {

            for (let j = 0; j < this.boardservise.board[i].length; j++) {
              this.boardservise.board[i][j].width = +item[i*j] - minus;
          }
        }
      }
      this.zoomValueWidth = +zoom;
    }

  }
  originSize(zoom){
    this.zoomingHeight(0, true);
    this.zoomingWidth(0, true);
    zoom.value = 0;
  }

  disabledRange(height, width){


    if (!height.checked && !width.checked){
     this.showRange = true
    } else  {
     this.showRange = false;
    }
  }
}
