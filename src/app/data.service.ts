import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(public  http: Http, public auth: AuthService) { }

  url = 'https://designer-board.firebaseio.com/template';
  urlComent = 'https://designer-board.firebaseio.com/comment';
  addBoard(data){
    const token = this.auth.getToken()
    return this.http.post(this.url + '.json?auth=' + token, data)
        .subscribe(res=> res);
}
  loadDate(){
    return  this.http.get(this.url + '.json')
        .map((res) => res.json());
  }

  delete(id){
    const token = this.auth.getToken()
    return this.http.delete(this.url + '/' + id + '.json?auth=' + token)
        .subscribe(res => res);
  }

  addComment(data){
    return this.http.post(this.urlComent + '.json' , data)
        .subscribe(res=> res);
  }
  loadComments(){
    return  this.http.get(this.urlComent + '.json')
        .map((res) => res.json());
  }
  deleteComment(id){
    const token = this.auth.getToken()
    return this.http.delete(this.urlComent + '/' + id + '.json?auth=' + token)
        .subscribe(res => res);
  }
}
