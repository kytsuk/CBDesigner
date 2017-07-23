import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
@ViewChild('layer') layer: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  addLayer(){
    let panellayer = document.getElementById('layer');
    console.log(panellayer);
    this.layer.nativeElement.appendChild('<app-layer>');
  }
}
