import { Component, OnInit } from "@angular/core";
import { UserService } from "../../core/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  credentials = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
  };
  passwordVisible = false
  constructor(private userService: UserService) {}

  async ngOnInit() {
    let currentUser = await this.userService.currentUser.toPromise();
  }
  async attempsRegister() {
    const user: any = await this.userService
      .addUser(this.credentials)
      .toPromise();
  }
}
