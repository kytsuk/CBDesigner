import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  commentForm: FormGroup;
  public comments : any[]=[];
  public arrayOfKeys;
  constructor(private router: Router, public date: DataService) {}

  ngOnInit() {
    this.date.loadComments()
        .subscribe( res => { this.arrayOfKeys = Object.keys(res);
          this.comments = res;
          console.log(this.comments)
        });
    this.commentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]),
      text: new FormControl('', [Validators.required])

    });
  }
  onsubmit(commentForm: FormGroup) {
    let date = new Date ();
    let time = date.getFullYear() + '.' + (date.getMonth()+1) + '.' + date.getDate();
    this.date.addComment([commentForm.value.name, commentForm.value.email, commentForm.value.text, time ]);
    this.goBack()

  }
  goBack() {
    this.router.navigate([''])
  }
}