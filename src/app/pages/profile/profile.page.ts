import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/moduls/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}

