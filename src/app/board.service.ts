import { Injectable } from '@angular/core';
import { Layer} from './board.model';

@Injectable()
export class BoardService {
  colorLayer: any[] = [
      {name: 'Oak',
       color: '#806517'
      },
      {name: 'Walnut',
      color: '#443028'
      },
      {name: 'Chery',
       color: '#95552f'
      },
      {name: 'Maple',
       color: '#f4d7af'
      },
      {name: 'Apple',
      color: '#cf7e4f'
      },
      {name: 'Ash',
      color: '#ebe2d5'
      }

  ]
  constructor() { }
     zoomvalue: number = 0;
    layershow: boolean = false; //для показу компонетів
    editLayer: number = null; //номер щита редагування
   totalWidth: number = 0; // загальна ширина щита
   heightBoard: any[] = []; // висота щита
    clickeditem: number[]=[]; //номер щита під час додавання ділянок

   layer: Layer[] = []; // один щит
  finalLayer: any[]=[]; // масив щитів
   board: any[] = []; //масив ділянок дошки

  addItemLayer(width: number, color: string, name: string){
   this.layer.push(new Layer(width, color, name));
   this.totalWidth += +width;

  }
   addFinalLayer(newlayer){
      this.finalLayer.push(newlayer);

   }

}
