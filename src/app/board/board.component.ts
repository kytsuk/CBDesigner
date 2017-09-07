import {Component, ElementRef, OnInit,  Renderer} from '@angular/core';
import {BoardService} from "../board.service";
import * as html2canvas from 'html2canvas';

import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public clickedItemBoard: number = null;
  public showPanelInst: boolean = false;
  public showboardImage: boolean = false;
  showzoom: boolean = false;
  showTotalBtn: boolean = true;
  constructor(public boardservise: BoardService, private el : ElementRef, private render: Renderer, private router: Router, private authServise: AuthService) {

  }

  ngOnInit() {

  }

  showComand(i){
    let Select= this.el.nativeElement.querySelector('#row'+ i)
    if (this.clickedItemBoard == null){
      this.clickedItemBoard = i;
      this.render.setElementClass(Select, "active-block", true);
      this.showPanelInst = true;
    } else {
      let lastSelect = this.el.nativeElement.querySelector('#row'+ this.clickedItemBoard);
      if(this.clickedItemBoard == i){
        this.render.setElementClass(Select, "active-block", false);
        this.clickedItemBoard = null;
        this.showPanelInst = false;
      } else{
        this.render.setElementClass(lastSelect, "active-block", false);
        this.render.setElementClass(Select, "active-block", true);
        this.clickedItemBoard = i;
        this.showPanelInst = true;
      }
    }
  }

  removeItem(){
    let click = this.clickedItemBoard
    this.boardservise.board.splice(click,1);
    this.showPanelInst = !this.showPanelInst;
    this.boardservise.clickeditem.splice(click,1);
    this.showComand(click)
  }
  moveLeft(){
    if(this.clickedItemBoard === 0){
      this.showComand(0);
    } else{
      let i = this.clickedItemBoard;
      let item = this.boardservise.board[i];
      this.boardservise.board[i] = this.boardservise.board[i-1];
      this.boardservise.board[i-1] = item;
      let chCliked = this.boardservise.clickeditem[i];
      this.boardservise.clickeditem[i] = this.boardservise.clickeditem[i-1];
      this.boardservise.clickeditem[i-1] = chCliked;
      this.showComand(i);
    }

  }
  moveRight(){
    if(this.clickedItemBoard === this.boardservise.board.length-1){
         this.showComand(this.boardservise.board.length-1);

    } else{
      let i = this.clickedItemBoard;
      let item = this.boardservise.board[i];
      this.boardservise.board[i] = this.boardservise.board[i+1];
      this.boardservise.board[i+1] = item;
      let chCliked = this.boardservise.clickeditem[i];
      this.boardservise.clickeditem[i] = this.boardservise.clickeditem[i+1];
      this.boardservise.clickeditem[i+1] = chCliked;
      this.showComand(i);
      }
  }
  rotate(){
   let i = this.clickedItemBoard;
   let item: any[] = this.boardservise.board[i];
    let revArr = new Array;
     for(let k = item.length-1; k>=0 ; k--){
      revArr.push(item[k]);
     }
    this.boardservise.board.splice(i, 1 , revArr) ;
    this.boardservise.rotateItem.splice(i, 1, !this.boardservise.rotateItem[i]) ;
    this.showComand(i);
    this.clickedItemBoard = null;

     }

  refreshCanvas(){
    this.showPanelInst = false;
    this.clickedItemBoard = null;
    this.showboardImage = false;
    this.boardservise.board.splice(0);
    this.boardservise.clickeditem.splice(0);
    this.boardservise.rotateItem.splice(0);

  }
  boardLenght():number{
    let length: number = 0;
    for(let i=0; i< this.boardservise.board.length; i++){
      length+= +this.boardservise.heightBoard[this.boardservise.clickeditem[i]];
    }
    return length;
  }
  generateImg() {
    var screenshot = new Image();
    html2canvas(document.getElementById('board'), {
      useCORS: true,
      onrendered: function(canvas) {
        screenshot.src = canvas.toDataURL( "image/jpeg" );
      }
    });
    this.boardservise.Image = screenshot;
    this.showboardImage = true;

  }

total(height, widthBlade, btntotal){
    if(this.showTotalBtn){
      this.boardservise.heightFinalBoard = +height.value;
      this.boardservise.ticknesBlade = +widthBlade.value;
      this.generateImg();
      this.showTotalBtn = !this.showTotalBtn;
      btntotal.textContent = 'Go to report';


    }else {
      this.showTotalBtn = !this.showTotalBtn;
      btntotal.textContent = 'Generate report';
      document.getElementById("btntot").setAttribute('class', 'btn-warning')
      this.router.navigate(['/total']);
    }
}
  zoomPanel(resize){
  this.showzoom = !this.showzoom;
  if(this.showzoom){
    resize.textContent = 'Hidden panel';
  } else resize.textContent = 'Board resize';
  }
   getWidth(width){
     let mq = window.matchMedia("screen and (min-width:480px)");
     if(mq.matches){
       return {'width': width+ 'px'}
     } else return {'width': width*0.7 + 'px'}
   }
  getHeight(height){
    let mq = window.matchMedia("screen and (min-width:480px)");
    if(mq.matches){
      return  height+ 'px'
    } else return  height*0.7 + 'px'
  }
}
