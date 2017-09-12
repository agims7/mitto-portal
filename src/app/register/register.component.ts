import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mitto-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  public emailAddress: string;
  public userName: string;
  public userSurname: string;
  public streetAndNumber: string;
  public postalCode: string;
  public cityName: string;
  public companyName: string;
  public nipNumber: number;
  public regulationsAcceptance: boolean = false;
  public registrationFinished: boolean = false;

  public newPassword;

  constructor() { }

  ngOnInit() {
  }

  changeRegistration() {
    this.registrationFinished = !this.registrationFinished;
  }

  onSubmit() {
    this.changeRegistration();
    alert('Zarejestrowano');
  }

}
