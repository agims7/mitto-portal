import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'mitto-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
  public defaultPreference: string = "preference-fastest";

  constructor(
    public appService: AppService
   ) { }

  ngOnInit() {

  }

  onSubmit() {
    alert('zapisano zmiany!')
  }


}
