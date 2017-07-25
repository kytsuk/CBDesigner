import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoardService} from "../board.service";

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements OnInit {
  @Output() refresh = new EventEmitter<boolean>();
  constructor(private boardservise: BoardService) { }

  ngOnInit() {
  }
  zooming(zoom){

    for(let i = 0; i < this.boardservise.board[0].length; i++){
      if(+zoom.value > this.boardservise.zoomvalue){
        let plus = +zoom.value - this.boardservise.zoomvalue
        this.boardservise.heightBoard[i] += +zoom.value + plus;

        this.boardservise.board[0][i].width = +this.boardservise.board[0][i].width + plus ;
      } else{
        let minus = this.boardservise.zoomvalue - +zoom.value
        this.boardservise.board[0][i].width = +this.boardservise.board[0][i].width - minus ;
        this.boardservise.heightBoard[i] -= +zoom.value + minus;
      }
    }
    this.boardservise.zoomvalue = +zoom.value;
  }

  clearCanvas(){
    this.refresh.emit(false);
    this.boardservise.board.splice(0);
    this.boardservise.clickeditem.splice(0);
  }
}
