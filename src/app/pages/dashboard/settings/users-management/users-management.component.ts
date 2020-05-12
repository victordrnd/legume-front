import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/core/user.service';
import { NzNotificationService, NzTableComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {
  constructor(private userService : UserService,
    private notificationService: NzNotificationService) { }
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


  async updateRole(value, user){
    const obj = {
      id : user.id,
      role_id : value
    } 
    this.userService.updateRole(obj).toPromise().then(res => {
      this.notificationService.success('Succès',"Le role a correctement été mis à jour");
    })
    .catch(err => this.notificationService.error("Erreur","Une erreur est survenue, réessayez plus tard"));
  }

}
