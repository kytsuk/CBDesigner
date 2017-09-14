import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {DataService} from "../../data.service";
import {AuthService} from "../../auth/auth.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  commentForm: FormGroup;
  id: number;
  private sub: Subscription;
  constructor(public  date: DataService, private router:Router, public auth: AuthService) {
    }

  ngOnInit() {
    this.commentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      text: new FormControl('', [Validators.required]),

    });
  }
  onsubmit(commentForm: FormGroup) {
  this.date.addComment([commentForm.value.name, commentForm.value.email, commentForm.value.text]);
  this.goBack();
  }

  goBack() {
    this.router.navigate([''])
  }


}
