import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'mitto-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public userLogin: string;
  public userPassword: string;

  constructor(
    private router: Router,
    public loginService: LoginService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.isLogged = true;
    this.router.navigateByUrl('/portal/orders')
  }

}
