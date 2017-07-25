import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BoardService} from "../../board.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private boardservise: BoardService, private router: Router) { }

  ngOnInit() {
  }
  clickInput(inputFile){

    inputFile.click();
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

      }
    reader.readAsText(blob);

   this.router.navigate(['panel']);
  }
}
