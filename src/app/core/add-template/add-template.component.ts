import { Component, OnInit } from '@angular/core';
import {BoardService} from "../../board.service";
import {DataService} from "../../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent implements OnInit {

  constructor(public boardservise: BoardService, private data: DataService, private route: Router) { }

  ngOnInit() {
  }
  saveTemplate(){
   this.data.addBoard([this.boardservise.Image.src, this.boardservise.finalLayer, this.boardservise.clickeditem, this.boardservise.heightBoard, this.boardservise.rotateItem]);
   this.route.navigate(['/template'])
  }
}
