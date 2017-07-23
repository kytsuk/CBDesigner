import { Component, OnInit } from '@angular/core';
import {BoardService} from "../board.service";

import { Layer} from "../board.model";

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent implements OnInit {

  constructor(public boarfservise: BoardService) { }
  colors = this.boarfservise.colorLayer;
  public selected: number;
  width: number;
  show: boolean;
  ngOnInit() {
    this.show = this.boarfservise.layershow;
  }
    AddItemLayer(){
     this.boarfservise.addItemLayer(this.width, this.colors[this.selected].color, this.colors[this.selected].name);

}
    layerAdd(){
 this.show = !this.show;
    this.boarfservise.layershow = !this.boarfservise.layershow;

    }

}
