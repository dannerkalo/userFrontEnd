import { UserServiceService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  constructor(
    private userService: UserServiceService,
    ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
