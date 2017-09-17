import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  url: any;
  baseUrl:string = 'https://www.youtube.com/embed/';
  constructor(private sanitizer: DomSanitizer, public translate: TranslateService) {

  }

  ngOnInit() {
    this.video();

  }
video (){

  this.translate.getTranslation(this.translate.currentLang).subscribe((res) => {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + res.video);
  });
  console.log(this.url)
}
}
