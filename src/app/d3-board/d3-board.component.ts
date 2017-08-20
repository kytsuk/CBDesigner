import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {BoardService} from "../board.service";

import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-d3-board',
  templateUrl: './d3-board.component.html',
  styleUrls: ['./d3-board.component.css']
})
export class D3BoardComponent implements AfterViewInit {
  @Input()
  public texture: string = '../../assets/image/ash/ash-layer.jpg';
  @ViewChild('canvas')
  private canvasRef: ElementRef
  private get canvas() : HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  scene: THREE.Scene;
 camera: THREE.Camera;
  directionalLight: THREE.Light;
  renderer: THREE.Renderer;
   constructor(public boardservice: BoardService){}
  ngAfterViewInit(){
     this.createScene();
     this.render();
  }
  private createScene() {
    this.scene = new THREE.Scene();

    this.camera =new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.x =190;
    this.camera.position.y =0;
     this.camera.position.z =640;
    this.camera.updateMatrix()



      this.directionalLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
    this.directionalLight.position.set( -20, 40, 60 ).normalize();
    this.scene.add(this.directionalLight);

      let positionWidth: number = 0;
 for (let i = 0; i<this.boardservice.board.length; i++)
     {
         let height: number = this.boardservice.heightBoard[this.boardservice.clickeditem[i]];
         let positionHeight: number = 0;
      for (let j=0; j< this.boardservice.board[i].length; j++) {
          var textureLoader = new THREE.TextureLoader();
          var texture0 = textureLoader.load(this.boardservice.board[i][j].color);
          var texture1 = textureLoader.load(this.boardservice.board[i][j].color);
          var texture2 = textureLoader.load(this.boardservice.board[i][j].urlEnd);
          var texture3 = textureLoader.load(this.boardservice.board[i][j].urlEnd);
          var texture4 = textureLoader.load(this.boardservice.board[i][j].color);
          var texture5 = textureLoader.load(this.boardservice.board[i][j].color);

          var materials = [
              new THREE.MeshBasicMaterial({map: texture0}),
              new THREE.MeshBasicMaterial({map: texture1}),
              new THREE.MeshBasicMaterial({map: texture2}),
              new THREE.MeshBasicMaterial({map: texture3}),
              new THREE.MeshBasicMaterial({map: texture4}),
              new THREE.MeshBasicMaterial({map: texture5})
          ];
          var faceMaterial = new THREE.MultiMaterial(materials);

          let width: number = this.boardservice.board[i][j].width;

          var geometry = new THREE.BoxGeometry(width, this.boardservice.heightFinalBoard, height);
          var boxMesh = new THREE.Mesh(geometry, faceMaterial);
          this.scene.add(boxMesh);
          boxMesh.position.x = positionHeight;
          boxMesh.position.z = positionWidth;
          if (this.boardservice.board[i][j + 1]) {
          let nextW = this.boardservice.board[i][j + 1].width;
          positionHeight += +(width / 2 + nextW/2)
           }
     }
         if (i<this.boardservice.clickeditem.length) {

             let nextH = this.boardservice.heightBoard[this.boardservice.clickeditem[i+1]]
             positionWidth += +(height / 2 + nextH/2)
            }
     }

  }
  render(){
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true,  antialias: true });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    let component: D3BoardComponent = this;
    (function render() {
      requestAnimationFrame(render);
     // component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }

    save3D(){

            let el = document.getElementById('canvas');
            console.log(el)
            html2canvas(el, {
                onrendered: function (canvas) {
                    var data = canvas.toDataURL();
                    console.log(canvas);
                    var docDefinition = {
                        content: [{
                            image: data,
                            width: 400,
                        }]
                    };
                    pdfMake.createPdf(docDefinition).download("3d-Board.pdf");
                }
            });
    }
}
