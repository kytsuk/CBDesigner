import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class DataService {

  constructor(private  http: Http) { }

  url = 'https://cbdesigner-fa070.firebaseio.com/template';

  addBoard(data){
    return this.http.post(this.url + '.json', data)
        .subscribe(res=> res);
}

}
