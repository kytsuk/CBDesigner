import {Component, Input, OnInit} from '@angular/core';
import {BoardService} from "../board.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent  {

  @Input() show : boolean;

  zoomprevious: number = 0;
  constructor(public boardservise: BoardService) { }



  zoomimg(zoom){
    let img = document.querySelector('#image').querySelector('img');
    if(zoom.value > this.zoomprevious){
      let plus = +(zoom.value - this.zoomprevious)
     img.height += plus;
      img.width += plus;

    }else {
      let minus = +(this.zoomprevious - zoom.value)
      img.height -= minus;
      img.width -= minus;

    }
    this.zoomprevious = +zoom.value;
  }


}
