import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AuthService} from "./auth/auth.service";

@Injectable()
export class DataService {

  constructor(private  http: Http, private auth: AuthService) { }

  url = 'https://board-designer-39575.firebaseio.com/template';

  addBoard(data){
    const token = this.auth.getToken()
    return this.http.post(this.url + '.json?auth=' + token, data)
        .subscribe(res=> res);
}

}
