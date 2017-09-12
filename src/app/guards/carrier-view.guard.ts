import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CarriersService } from '../services/carriers.service';

@Injectable()
export class CarrierViewGuard implements CanActivate {

  constructor(
    public router: Router,
    public carriersService: CarriersService
  ) {

  }

  canActivate() {
    if (this.carriersService.carrierViewAvailable) {
      console.log('carrierViewAvailable jest true:', this.carriersService.carrierViewAvailable)
      return this.carriersService.carrierViewAvailable;
    } else {
      console.log('carrierViewAvailable jest false: ', this.carriersService.carrierViewAvailable)
      this.router.navigateByUrl('/portal/package-details');
      return this.carriersService.carrierViewAvailable;
    }
  }
  
}