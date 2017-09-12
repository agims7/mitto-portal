import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ParcelService } from '../services/parcel.service';

@Injectable()
export class SummaryViewGuard implements CanActivate {

  constructor(
    public router: Router,
    public parcelService: ParcelService
  ) {

  }

  canActivate() {
    if (this.parcelService.summaryViewAvailable) {
      console.log('summaryViewAvailable jest true:', this.parcelService.summaryViewAvailable)
      return this.parcelService.summaryViewAvailable;
    } else {
      console.log('summaryViewAvailable jest false:', this.parcelService.summaryViewAvailable)
      this.router.navigateByUrl('/portal/package-details');
      return this.parcelService.summaryViewAvailable;
    }
  }
  
}