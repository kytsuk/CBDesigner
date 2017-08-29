import { Component, OnInit } from '@angular/core';
import {BoardService} from "../board.service";
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public totalBoard:any[] = [];
  constructor(public  boardservise: BoardService) { }

  ngOnInit() {
      if(this.boardservise.board.length){
          this.totalEl();
      }

  }
  layerLenght(i){
   var total =0;
    for(let j=0 ; j< this.boardservise.clickeditem.length; j++){
      if (i == +this.boardservise.clickeditem[j]){
        total += +this.boardservise.heightFinalBoard + this.boardservise.ticknesBlade;
      }
    }
    return total- this.boardservise.ticknesBlade;
  }
  woodTotal(i){
       let copy = this.boardservise.finalLayer[i];
      let obg:Object =   {"name": copy[0].name,
          "width": copy[0].width,
          "color": copy[0].color,
          "count": 0
      };
      let arr : any[] = []
         arr = [obg];
      for(let i = 0 ; i< copy.length; i++){
          let counter = 0;
      for(let j=0;  j < arr.length; j++){

       if( copy[i].name == arr[j].name && copy[i].width == arr[j].width){
         arr[j].count ++;
         counter++;
        }
       }
      if (counter == 0){
              arr.push({
                  "name": copy[i].name,
                  "width": copy[i].width,
                  "color": copy[i].color,
                  "count": 1
              });
          }
       }
  return arr;
  }
  totalEl(){
      for (let i =0 ; i< this.boardservise.finalLayer.length; i++){
          this.totalBoard.push(this.woodTotal(i))
      }
  }

    saveImg(){
        var docDefinition = {
            content: [
                { text: 'End grain cuttin board designe', style: 'header' },
                {image: this.boardservise.Image.src }
              ],
            styles: {
                header: {
                    fontSize: 22,
                    bold: true
                }
            }
        };
          pdfMake.createPdf(docDefinition).download('image.pdf');
    }

    saveReport(){
        let background = document.getElementsByClassName('layer-infos');
        background[0].setAttribute('style', 'background: none');
        let backgroundPanel = document.getElementsByClassName('panel');
        for (let i=0; i< backgroundPanel.length; i++){
            backgroundPanel[i].setAttribute('style', 'background: none; color: black');
        }

        let el = document.getElementById('total');
        html2canvas(el, {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500,
                    }]
                };
                pdfMake.createPdf(docDefinition).download("report.pdf");
            }
        });
        background[0].removeAttribute('style');
        for (let i=0; i< backgroundPanel.length; i++){
            backgroundPanel[i].removeAttribute('style');
        }
    }
    print(){
        let background = document.getElementsByClassName('layer-infos');
         background[0].setAttribute('style', 'background: none');
         let backgroundPanel = document.getElementsByClassName('panel');
         for (let i=0; i< backgroundPanel.length; i++){
             backgroundPanel[i].setAttribute('style', 'background: none; color: black');

         }
        let el = document.getElementById('total');
        html2canvas(el, {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 550,
                    }]
                };
                pdfMake.createPdf(docDefinition).print();
            }
        });
        background[0].removeAttribute('style');
        for (let i=0; i< backgroundPanel.length; i++){
            backgroundPanel[i].removeAttribute('style');

        }
    }
}
