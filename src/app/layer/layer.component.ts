import { Component, OnInit } from '@angular/core';
import {BoardService} from "../board.service";
import * as FileSaver from 'file-saver';
import {translateLoaderFactory, TranslateService} from "ng2-translate";


@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent implements OnInit {

  constructor(public boardservise: BoardService, public translate: TranslateService) { }
  colors = this.boardservise.colorLayer;
 public arrayofKeys;
 public woodName: any[]= [];
  public selected: number;
  width: number;
  show: boolean;
  ngOnInit() {
    this.show = this.boardservise.layershow;
    this.translate.getTranslation(this.translate.currentLang).subscribe((res) => {
               this.arrayofKeys = Object.keys(res.wood);
              for (let i=0; i< this.arrayofKeys.length; i++){
                  this.woodName.push(res.wood[this.arrayofKeys[i]]);
              }
         });
    }
    AddItemLayer(){
     this.boardservise.addItemLayer(this.width, this.colors[this.selected].color, this.colors[this.selected].name, this.colors[this.selected].urlEnd);

}
    layerAdd(){
    this.show = true;
    this.boardservise.layershow = !this.boardservise.layershow;


    }
    SaveFile(){
       let array = JSON.stringify([this.boardservise.rotateItem, this.boardservise.finalLayer, this.boardservise.clickeditem, this.boardservise.heightBoard]);

        let file = new Blob([array], {type: "application/json"});
        let url  = URL.createObjectURL(file);

        // var a = document.createElement('a');
        // a.download    = "board.brd";
        // a.href        = url;
        // a.click();
    FileSaver.saveAs(file, 'cutting-board.brd');
    }
}
