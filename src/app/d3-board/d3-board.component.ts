import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {BoardService} from "../board.service";

import { OrbitControls } from 'three-orbitcontrols-ts';

import * as TrackballControls from 'three-trackballcontrols'
import {canvas} from "three/detector";
@Component({
  selector: 'app-d3-board',
  templateUrl: './d3-board.component.html',
  styleUrls: ['./d3-board.component.css']
})
export class D3BoardComponent implements AfterViewInit {

  @ViewChild('canvas')
  private canvasRef: ElementRef
  private get canvas() : HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  scene: THREE.Scene;
 camera: THREE.Camera;
  directionalLight: THREE.Light;
  renderer: THREE.Renderer;
  controls: TrackballControls;

   constructor(public boardservice: BoardService){}
  ngAfterViewInit(){
     this.createScene();
     this.render();
     this.resize();
  }
   createScene() {
      let widthboard: number = 0;
      let lenghtboard: number = 0;
      for (let i=0; i< this.boardservice.board[0].length; i++){
          widthboard += +this.boardservice.board[0][i].width;
      }
      for(let i=0; i< this.boardservice.board.length; i++){
          lenghtboard+= +this.boardservice.heightBoard[this.boardservice.clickeditem[i]];
      }

    this.scene = new THREE.Scene();
    this.scene.position.set(widthboard/2+150, lenghtboard/2 ,0);
    //
    // var axisHelper = new THREE.AxisHelper( 750 );
    // this.scene.add( axisHelper );

    this.camera =new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight , 0.1, 1000 );
    this.camera.position.set(650,450,-200);
    this.camera.rotation.set(-2, 1, 2);
    this.camera.up.set(-30 , 100, 11);


      this.controls = new TrackballControls( this.camera, this.canvas);
      this.controls.rotateSpeed = 3.0;
      this.controls.zoomSpeed = 1.2;
      this.controls.panSpeed = 0.8;
      this.controls.noPan = false;
      this.controls.staticMoving = false;
      this.controls.dynamicDampingFactor = 0.3;
      this.controls.target = this.scene.position;


    this.directionalLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
    this.directionalLight.position.set( -20, 40, 60 ).normalize();
    this.scene.add(this.directionalLight);

      let positionWidth: number = -lenghtboard/2;
 for (let i = 0; i<this.boardservice.board.length; i++)
     {
         let height: number = this.boardservice.heightBoard[this.boardservice.clickeditem[i]];
         let positionHeight: number = -widthboard/2 +(+this.boardservice.board[i][0].width/2);

      for (let j=0; j< this.boardservice.board[i].length; j++) {
          var textureLoader = new THREE.TextureLoader();
          var texture0 = textureLoader.load(this.boardservice.board[i][j].color);
          var texture1 = textureLoader.load(this.boardservice.board[i][j].color);
          var texture2 = textureLoader.load(this.boardservice.board[i][j].urlEnd);
          var texture3 = textureLoader.load(this.boardservice.board[i][j].urlEnd);
          var texture4 = textureLoader.load(this.boardservice.board[i][j].color);
          var texture5 = textureLoader.load(this.boardservice.board[i][j].color);

          texture0.minFilter = THREE.LinearFilter;
          texture1.minFilter = THREE.LinearFilter;
          texture2.minFilter = THREE.LinearFilter;
          texture3.minFilter = THREE.LinearFilter;
          texture4.minFilter = THREE.LinearFilter;
          texture5.minFilter = THREE.LinearFilter;

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
          boxMesh.updateMatrix();
          this.scene.add(boxMesh);

          boxMesh.position.x = positionHeight;
          boxMesh.position.z = -positionWidth;
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
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true,  antialias: true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    let component: D3BoardComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animate();
      component.renderer.render(component.scene, component.camera);
    }());

  }

     resize() {
    var width = this.canvas.clientWidth;
    var height = this.canvas.clientHeight;
    this.renderer.setSize(width, height);
    this.controls.handleResize();
}
    animate() {
           this.controls.update();
    }

}
