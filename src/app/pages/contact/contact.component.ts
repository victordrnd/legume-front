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

  formContact: FormGroup;

  constructor(private fb: FormBuilder,private userService: UserService, private router : Router, private notificationService : NzNotificationService) {

  }

  ngOnInit(): void {
  }

  get email(){
    return this.formContact.controls.email
  }

  get message() { 
    return this.formContact.controls.message
  }


   
 

}
