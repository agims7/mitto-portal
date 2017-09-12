import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mitto-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.less']
})
export class PasswordChangeComponent implements OnInit {
  public currentPassword: string;
  public newPassword: string;
  public repeatNewPassword: string;
  test;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigateByUrl('/portal/settings')
    alert('zmieniono haslo!')
  }

}
