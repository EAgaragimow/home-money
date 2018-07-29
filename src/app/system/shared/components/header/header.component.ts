import {Component, OnInit} from '@angular/core';
import {User} from "../../../../shared/models/user.model";
import {AuthService} from "../../../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'mel-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  time = new Date();
  user: User;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));

    // TIME
    setInterval(() => {
      this.time = new Date()
    }, 1000);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
