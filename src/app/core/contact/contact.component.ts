import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  commentForm: FormGroup;
  constructor(private router: Router) {}

  ngOnInit() {
    this.commentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      text: new FormControl('', [Validators.required])

    });
  }
  onsubmit(commentForm: FormGroup) {


  }
  goBack() {
    this.router.navigate(['/news'])
  }
}
