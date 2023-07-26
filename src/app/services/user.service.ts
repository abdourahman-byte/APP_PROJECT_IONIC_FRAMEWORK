import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../moduls/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user : User[] = [];
  constructor(private storage : StorageService){
    this.init(); 

  }

  init(){
    this.storage.get("user")?.then((_user : User[]) => {
      this.user = _user;
    })
  }

  public saveUser(user: User){
    this.user.push(user);
    this.storage.set("user", this.user); 
  }

  public userList() : Promise<User[]> {
    return Promise.resolve(this.user);
  }

  
}


