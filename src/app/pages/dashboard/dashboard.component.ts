import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'dashboard-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public router: Router,
    private userService: UserService) { }

  async ngOnInit() {
    window.scroll(0, 0);

  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigate(['']);
  }

}
