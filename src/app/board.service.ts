import { Injectable } from '@angular/core';
import { Layer} from './board.model';

@Injectable()
export class BoardService {
  public colorLayer: any[] = [
      {name: 'Oak',
       color: '../../assets/image/oak/oak-layer.jpg',
       urlEnd: '../../assets/image/oak/oak-end'
      },
      {name: 'Walnut',
          color: '../../assets/image/walnut/walnut-layer.jpg',
          urlEnd: '../../assets/image/walnut/walnut-end'
      },
      {name: 'Chery',
          color: '../../assets/image/cherry/cherry-layer.jpg',
          urlEnd: '../../assets/image/cherry/cherry-end'
      },
      {name: 'Maple',
          color: '../../assets/image/maple/maple-layer.jpg',
          urlEnd: '../../assets/image/maple/maple-end'
      },
      {name: 'Apple',
      color: '../../assets/image/apple/apple-layer.jpg',
      urlEnd: '../../assets/image/apple/apple-end'
      },
      {name: 'Ash',
          color: '../../assets/image/ash/ash-layer.jpg',
          urlEnd: '../../assets/image/ash/ash-end'
      }

  ]
  constructor() { }

    layershow: boolean = false; //для показу компонетів
    editLayer: number = null; //номер щита редагування
   totalWidth: number = 0; // загальна ширина щита
   heightBoard: any[] = []; // висота щита
    clickeditem: number[]=[]; //номер щита під час додавання ділянок
  heightFinalBoard:number; //висота дошки
    ticknesBlade: number; //товщина пили

   layer: Layer[] = []; // один щит
  finalLayer: any[]=[]; // масив щитів
   board: any[] = []; //масив ділянок дошки
    rotateItem: any[] = [] //яка ділянка перевернута
    Image :any;
  addItemLayer(width: number, color: string, name: string, urlEnd: string){
   this.layer.push(new Layer(width, color, name, urlEnd +this.randomise() +'.jpg'));
   this.totalWidth += +width;

  }
   addFinalLayer(newlayer){
      this.finalLayer.push(newlayer);

   }
    randomise(){
        let ran = +(Math.random()*3).toFixed(0) ;
        return ran;
    }

}
