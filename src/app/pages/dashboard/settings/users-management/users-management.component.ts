import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

  constructor(private userService : UserService) { }
  users;
  roles;
  keyword
  
  async ngOnInit() {
    this.users = await this.userService.getAllUser().toPromise();
    this.roles = await this.userService.getAllRole().toPromise();
  }


  async search(){
    this.users = await this.userService.getAllUser(this.keyword).toPromise();
  }

}
