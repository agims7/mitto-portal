import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mitto-remind-password',
  templateUrl: './remind-password.component.html',
  styleUrls: ['./remind-password.component.less']
})
export class RemindPasswordComponent implements OnInit {
  public emailAddress: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigateByUrl('/login')
    alert('Wysłano przypomnienie hasła');
  }

}
