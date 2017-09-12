import { Component, HostListener } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized, } from '@angular/router';
import { AppService } from './services/app.service';


@Component({
  selector: 'mitto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  @HostListener('window:resize')
  onResize() {
      this.appService.windowWidth = window.innerWidth;
      if (this.appService.windowWidth <= this.appService.screenResolutionBreakPoint) {
          this.appService.mobileView = true;
      } else {
          this.appService.mobileView = false;
      }
  }

  constructor(
    private router: Router,
    public appService: AppService
  ) {
    router.events.subscribe((val) => {
      if (val instanceof RoutesRecognized) {
          this.appService.urlAddress = val.url.replace(/#.*$/, '');
          console.log("zmiana trasy na ", this.appService.urlAddress);
      }
  });
  }

  ngOnInit() {
    this.appService.getWindowWidth();
  }

}
