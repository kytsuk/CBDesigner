import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {TranslateService} from "ng2-translate";
import {BoardService} from "../../board.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  url: any;
  baseUrl:string = 'https://www.youtube.com/embed/';
  constructor(private sanitizer: DomSanitizer, public translate: TranslateService, public boardservise: BoardService) {

  }

  ngOnInit() {

    this.translate.getTranslation(this.translate.currentLang).subscribe((res) => {
      console.log(this.translate.currentLang)
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + res.video);
    });


  }

}
