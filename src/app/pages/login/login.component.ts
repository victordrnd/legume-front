import { Component, OnInit } from "@angular/core";
import { UserService } from "../../core/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: "",
    password: "",
  };
  constructor(private userService: UserService) {}

  async ngOnInit() {
    let currentUser = await this.userService.currentUser.toPromise();
  }

  async attempsLogin() {
    const user: any = await this.userService
      .attemptAuth(this.credentials)
      .toPromise();
  }
}
