import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../user.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private userService: UserService, private notificationService: NzNotificationService) { }

  canActivate() {
    const result = this.userService.getToken();
    if (!result) {
      this.notificationService.warning("Erreur authentification", "Cet espace n'est accessible qu'une fois authentifié")
      //this.router.navigate(['connexion']);
      return false;
    }
    return true;

  }
}