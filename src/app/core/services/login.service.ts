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
  isSuperAdmin
  type
  lang
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
    this.isSuperAdmin = localStorage.getItem("isSuperAdmin");
    this.type = localStorage.getItem("type");
    this.lang = localStorage.getItem("lang");

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
    // return localStorage.getItem("token");
  }

  getuserName() {
    return this.userName;
  }

  getIsSuperAdmin() {
    return this.isSuperAdmin;
  }

  getType() {
    return this.type;
  }

  getLang() {
    return this.lang;
  }

  setLang(lang) {
    this.lang = lang;
    localStorage.setItem('lang', lang);

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
    localStorage.setItem('isSuperAdmin', data.user.isSuperAdmin);
    if (data.user.isSuperAdmin == true)
      localStorage.setItem('type', "superAdmin");
    else
      localStorage.setItem('type', "admin");
    this.router.navigateByUrl('/').then(() => this.router.navigateByUrl('/'));
  }



  logoutLocalStorage() {
    localStorage.clear();
  }

}
