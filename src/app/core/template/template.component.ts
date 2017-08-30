import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {BoardService} from "../../board.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  public arrayOfKeys;
  public boardDate: any[]=[];
  constructor(private data: DataService, public boardservise: BoardService, private route: Router, private authServise: AuthService) { }

  ngOnInit() {
    this.data.loadDate()
        .subscribe( res => {

          this.arrayOfKeys = Object.keys(res);
          this.boardDate = res;

        });

  }
  load(index){
    this.boardservise.board = [];
    this.boardservise.finalLayer = this.boardDate[index][1];
    this.boardservise.clickeditem = this.boardDate[index][2];
    this.boardservise.heightBoard = this.boardDate[index][3];
    this.boardservise.rotateItem = this.boardDate[index][4];
    for(let i=0; i< this.boardservise.clickeditem.length; i++){
      this.boardservise.board.push( this.boardservise.finalLayer[this.boardservise.clickeditem[i]]);
    }

    for(let j=0; j< this.boardservise.rotateItem.length; j++){
      if(this.boardservise.rotateItem[j] == false) {
        let item: any[] = this.boardservise.board[j];
        let revArr = new Array;

        for (let k = item.length - 1; k >= 0; k--) {
          revArr.push(item[k]);
        }
        this.boardservise.board.splice(j, 1, revArr);
      }
    }
    this.route.navigate(['/panel']);
  }

  delete(index){
      this.data.delete(index);
      this.route.navigate(['/'])
  }
}
