import {Component, OnInit} from '@angular/core';
import {BoardService} from "../board.service";


@Component({
  selector: 'app-show-layer',
  templateUrl: './show-layer.component.html',
  styleUrls: ['./show-layer.component.css']
})
export class ShowLayerComponent implements OnInit {
   //layer: Layer[]=[];

  constructor(public boardservise: BoardService) {    }

  ngOnInit() {


  }


    sortLayer(value, i:number){
     let sort = this.boardservise.layer[i];
        this.boardservise.layer.splice(i,1)
        this.boardservise.layer.splice(value.value, 0, sort);
    }

    remove(i){
        this.boardservise.totalWidth -= this.boardservise.layer[i].width;
      this.boardservise.layer.splice(i,1);
    }



    changeWidth(){

        this.boardservise.totalWidth= 0;
        for (let i = 0; i < this.boardservise.layer.length; i++) {
                    this.boardservise.totalWidth += +this.boardservise.layer[i].width
                 }
    }
    SaveLayer(height){
        let edit = this.boardservise.editLayer
        if(edit == null){
            this.boardservise.addFinalLayer(this.boardservise.layer);
        } else {
            this.boardservise.finalLayer[edit] = this.boardservise.layer
            this.boardservise.editLayer = null;
            this.boardservise.heightBoard[edit] = height.value;
        }
        this.boardservise.layershow = false;

        this.boardservise.layer = [];
        this.boardservise.totalWidth = 0;
        this.boardservise.heightBoard.push(+height.value);

    }
}
