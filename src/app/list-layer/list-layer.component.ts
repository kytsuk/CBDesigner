import { Component, OnInit } from '@angular/core';
import {BoardService} from "../board.service";

@Component({
  selector: 'app-list-layer',
  templateUrl: './list-layer.component.html',
  styleUrls: ['./list-layer.component.css']
})
export class ListLayerComponent implements OnInit {

  constructor(private boardservise: BoardService) { }

  ngOnInit() {
  }
  removeLayer(i: number){
    this.boardservise.finalLayer.splice(i , 1);
    this.boardservise.heightBoard.splice(i, 1);
  }
  addItem(i){
    this.boardservise.board.push( this.boardservise.finalLayer[i]);
    this.boardservise.clickeditem.push(i) ;


  }
  editLayer(i: number){
    this.boardservise.layer = this.boardservise.finalLayer[i];
    this.boardservise.layershow = !this.boardservise.layershow;
    this.boardservise.editLayer = i;

  }
}
