import { Component, OnInit } from "@angular/core";
import { UserService } from 'src/app/core/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';


@Component({
  selector: "page-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  passwordVisible = false;
  loading = true;
  constructor(private fb: FormBuilder, private userService: UserService,
    private router: Router,
    private notificationService: NzNotificationService) {}

  async ngOnInit() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    this.loading = false;
  }

  async attempsLogin() {
    await this.userService.attemptAuth(this.form.value)
      .toPromise()
      .then(res => {
        this.router.navigate(['/dashboard/home'])
      }).catch(err => {
        this.notificationService.error("Erreur", "Les identifiants ne sont pas reconnus");
      });
  }



  get email() {
    return this.form.controls.email
  }

  get password() {
    return this.form.controls.password
  }
}
