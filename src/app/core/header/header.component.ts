import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BoardService} from "../../board.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@ViewChild('fileInput') el:ElementRef;

  constructor(private boardservise: BoardService) { }

  ngOnInit() {
  }
  open(e){
    var file = e.target.files[0];
    let blob = new Blob([file], {type: 'text/json'});
      let reader = new FileReader();

      reader.onload = (e) => {
        let array = JSON.parse(reader.result);
        this.boardservise.board = array[0];
        this.boardservise.finalLayer = array[1];
        this.boardservise.clickeditem = array[2];
        this.boardservise.heightBoard = array[3];
        console.log(array);

      }
    reader.readAsText(blob);


  }
}
