import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// import { PersistenceModule } from 'angular-persistence';

// import { PersistenceService } from 'angular-persistence';



@Injectable()
export class LoginService {
  isLogIn;
  isRemember;
  userId;
  token;
  userName
  type
  constructor(private cookieService: CookieService, private router: Router) {
    if (localStorage.getItem('userId')) {
      this.isLogIn = true
      this.init();
    }
    else {
      this.isLogIn = false;
    }
  }

  init() {
    this.userId = localStorage.getItem("userId");
    this.token = localStorage.getItem("token");
    this.userName = localStorage.getItem("userName");
  }

  isLogin() {
    return this.isLogIn;
  }

  getUserId() {
    if (this.userId != "")
      return this.userId;
  }

  getToken() {
    return this.token;
  }

  getuserName() {
    return this.userName;
  }

  getType() {
    return this.type;
  }

  logIn(data, rememberPass: boolean = true) {
    this.isLogIn = true;
    this.logInLocalStorage(data);
    this.init();
  }

  logout() {

    this.logoutLocalStorage();
    this.router.navigateByUrl('/login')
  }


  logInLocalStorage(data) {
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('token', data.id);
    localStorage.setItem('userName', data.user.username);
    this.router.navigateByUrl('/').then(() => this.router.navigateByUrl('/'));
  }



  logoutLocalStorage() {
    localStorage.clear();
  }

}
