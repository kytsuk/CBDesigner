import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BoardService} from "../../board.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {TranslateService} from "ng2-translate";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private boardservise: BoardService, private router: Router, private authServise: AuthService, private translate: TranslateService) { }

  ngOnInit() {
  }


  clickInput(inputFile){

    inputFile.click();
  }

  open(e){
    this.boardservise.board = [];

    var file = e.target.files[0];

    let blob = new Blob([file], {type: 'text/json'});
      let reader = new FileReader();

      reader.onload = (e) => {
        let array = JSON.parse(reader.result);

        this.boardservise.rotateItem = array[0];
        this.boardservise.finalLayer = array[1];
        this.boardservise.clickeditem = array[2];
        this.boardservise.heightBoard = array[3];

        for(let i=0; i<this.boardservise.clickeditem.length; i++){
          this.boardservise.board.push( this.boardservise.finalLayer[this.boardservise.clickeditem[i]]);
        }

        for(let j=0; j< this.boardservise.rotateItem.length; j++){
          if(this.boardservise.rotateItem[j] == false ) {
            let item: any[] = this.boardservise.board[j];
            let revArr = new Array;
            for (let k = item.length - 1; k >= 0; k--) {
              revArr.push(item[k]);
            }
            this.boardservise.board.splice(j, 1, revArr);
          }
        }
      }
    reader.readAsText(blob);

   this.router.navigate(['panel']);

  }
  new(){
    this.boardservise.board = [];
    this.boardservise.finalLayer = [];
    this.boardservise.heightBoard = [];
    this.boardservise.clickeditem = [];
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
