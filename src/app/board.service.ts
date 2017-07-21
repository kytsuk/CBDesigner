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
   public totalWidth: number = 0;
  public layer: Layer[] = [];

  addItemLayer(width: number, color: string, name: string){
   this.layer.push(new Layer(width, color, name));
   this.totalWidth += +width;

  }


}
