import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]],
    });
  }

  get email(){
    return this.form.controls.email
  }

  get message() { 
    return this.form.controls.message
  }


   
 

}
