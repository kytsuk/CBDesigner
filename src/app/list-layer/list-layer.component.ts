import { Component, OnInit } from '@angular/core';
import {BoardService} from "../board.service";

@Component({
  selector: 'app-list-layer',
  templateUrl: './list-layer.component.html',
  styleUrls: ['./list-layer.component.css']
})
export class ListLayerComponent implements OnInit {

  constructor(public boardservise: BoardService) { }

  ngOnInit() {
  }
  removeLayer(i: number){
    this.boardservise.finalLayer.splice(i , 1);
    this.boardservise.heightBoard.splice(i, 1);
  }
  addItem(i){
    this.boardservise.board.push( this.boardservise.finalLayer[i]);
    this.boardservise.clickeditem.push(i) ;
    this.boardservise.rotateItem.push(true);

  }
  editLayer(i: number){
    this.boardservise.layer = this.boardservise.finalLayer[i];
    this.boardservise.layershow = !this.boardservise.layershow;
    this.boardservise.editLayer = i;
    for (let j=0; j< this.boardservise.finalLayer[i].length; j++){
      this.boardservise.totalWidth += +this.boardservise.finalLayer[i][j].width
    }
  }
  layerWidth(i):number{
    let width: number = 0;
    for (let j=0; j< this.boardservise.finalLayer[i].length; j++){
     width += +this.boardservise.finalLayer[i][j].width;
    }
    return width;
  }
}
