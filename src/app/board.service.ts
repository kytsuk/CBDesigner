import { Injectable } from '@angular/core';
import { Layer} from './board.model';

@Injectable()
export class BoardService {
  colorLayer: any[] = [
      {name: 'Oak',
       color: '#806517'
      },
      {name: 'walnut',
      color: '#443028'
      },
      {name: 'chery',
       color: '#95552f'
      },
      {name: 'maple',
       color: '#f4d7af'
      },
      {name: 'apple',
      color: '#cf7e4f'
      },
      {name: 'Ash',
      color: '#ebe2d3'
      }

  ]
  constructor() { }
    public layershow: boolean = false; //для показу компонетів
    public editLayer: number = null;
  public totalWidth: number = 0; // загальна ширина щита
  public heightBoard: any[] = []; // висота щита
  public  clickeditem: number[]=[]; //номер щита під час додавання ділянок

  public layer: Layer[] = []; // один щит
  public finalLayer: any[]=[]; // масив щитів
  public board: any[] = []; //масив ділянок дошки

  addItemLayer(width: number, color: string, name: string){
   this.layer.push(new Layer(width, color, name));
   this.totalWidth += +width;

  }
   addFinalLayer(newlayer){
      this.finalLayer.push(newlayer);

   }

}
