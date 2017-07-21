import { Component, OnInit } from '@angular/core';
import {BoardService} from "../board.service";
import {Layer} from "../board.model";

@Component({
  selector: 'app-show-layer',
  templateUrl: './show-layer.component.html',
  styleUrls: ['./show-layer.component.css']
})
export class ShowLayerComponent implements OnInit {
   layer: Layer[]=[];
    selectNumber: number;
  constructor(public boardservise: BoardService) {    }

  ngOnInit() {
    this.layer = this.boardservise.layer;

  }
    sortLayer(value, i:number){
     let sort = this.layer[i];
        this.layer.splice(i)
      this.layer.splice(value.value, 0, sort);

    }
}
