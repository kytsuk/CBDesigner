import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-d3-board',
  templateUrl: './d3-board.component.html',
  styleUrls: ['./d3-board.component.css']
})
export class D3BoardComponent implements AfterViewInit {

  constructor() { }

  name = 'Angular';
  scene: any;
  camera: any;
  renderer: any;
  geometry: any;
  material: any;
  mesh: any;

  ngAfterViewInit() {
    this.init();
    this.animate();
  }

  init() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    this.geometry = new THREE.BoxGeometry(200, 200, 200);
    this.material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    document.getElementById('3D').appendChild(this.renderer.domElement);


  }

  animate() {
    requestAnimationFrame(this.animate);
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }
}
