import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public router: Router,
    public loginService: LoginService
  ) {

  }

  canActivate() {
    if (this.loginService.isLogged) {
      return this.loginService.isLogged;
    } else {
      this.router.navigateByUrl('/login');
      return this.loginService.isLogged;
    }
  }
  
}