import { Component, OnInit } from '@angular/core';
import {BoardService} from "../board.service";
import * as FileSaver from 'file-saver';


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
    SaveFile(){
       let array = JSON.stringify([this.boarfservise.board, this.boarfservise.finalLayer, this.boarfservise.clickeditem, this.boarfservise.heightBoard]);

        let file = new Blob([array], {type: "application/json"});
        let url  = URL.createObjectURL(file);

        // var a = document.createElement('a');
        // a.download    = "board.brd";
        // a.href        = url;
        // a.click();
    FileSaver.saveAs(file, 'cutting-board.brd');
    }
}
