import { Component, OnInit } from "@angular/core";
import { UserService } from 'src/app/core/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: "page-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  passwordVisible = false;
  constructor(private fb: FormBuilder,private userService: UserService,
    private router : Router) { }

  async ngOnInit() {
    if(await this.userService.populate()){
      this.router.navigate(['dashboard']);
    };
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      remember: [true]
    });


  }

  async attempsLogin() {
    const user: any = await this.userService.attemptAuth(this.form.value)
      .toPromise()
      .then(res => {
        this.router.navigate(['dashboard'])
      });
  }



  get email(){
    return this.form.controls.email
  }

  get password(){
    return this.form.controls.password
  }
}
