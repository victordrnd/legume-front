import { Component, OnInit } from "@angular/core";
import { UserService } from "../../core/user.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: "page-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  passwordVisible = false;
  constructor(private fb: FormBuilder, private userService: UserService,
    private router: Router) { }

  async ngOnInit() {
    this.form = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      phone: [null, [Validators.required, Validators.pattern("[0-9]{10}")]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, Validators.required],
      remember: [true]
    },
      {
        validator: this.MustMatch('password', 'confirmPassword')
      });


  }

  async register() {
    const user: any = await this.userService.addUser(this.form.value)
      .toPromise()
      .then(res => {
        this.router.navigate(['dashboard'])
      });

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

  get password() {
    return this.form.controls.password
  }
  get confirmPassword() {
    return this.form.controls.confirmPassword
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}
