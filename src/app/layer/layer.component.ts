import { Component, OnInit } from '@angular/core';
import {BoardService} from "../board.service";

import { Layer} from "../board.model";

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent implements OnInit {

  constructor(private boarfservise: BoardService) { }
 colors = this.boarfservise.colorLayer;
  public selected: number;
  width: number;

  ngOnInit() {

  }
AddLayer(){
     this.boarfservise.addItemLayer(this.width, this.colors[this.selected].color, this.colors[this.selected].name);
}

}
