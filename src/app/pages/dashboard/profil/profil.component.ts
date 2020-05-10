import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  form;
  user;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  async ngOnInit() {
    this.user = await this.userService.getCurrentUser().toPromise();
    console.log(this.user);
    this.form = this.fb.group({
      firstname: [this.user.firstname, Validators.required],
      lastname: [this.user.lastname, Validators.required],
      phone: [this.user.phone, [Validators.required, Validators.pattern("[0-9]{10}")]],
      email: [this.user.email, [Validators.required, Validators.email]]
    })
  }


  save() {

  }


  get firstname() {
    return this.form.controls.firstname
  }
  get lastname() {
    return this.form.controls.lastname
  }
  get phone() {
    return this.form.controls.phone
  }

  get email() {
    return this.form.controls.email
  }



}
