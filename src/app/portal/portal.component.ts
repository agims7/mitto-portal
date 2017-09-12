import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'mitto-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.less']
})
export class PortalComponent implements OnInit {

  constructor(
    public appService: AppService
  ) { }

  ngOnInit() {
  }

}
