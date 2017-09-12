import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ParcelService } from '../services/parcel.service';
import { CarriersService } from '../services/carriers.service';
import * as _ from 'lodash';

@Component({
  selector: 'mitto-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.less']
})
export class CarrierComponent implements OnInit {
  public carrierClickedForButton: boolean = true;
  
  constructor(
    public router: Router,
    public parcelService: ParcelService,
    public carriersService: CarriersService
  ) { }

  ngOnInit() {
    this.checkSelection();
  }

  submitCarrierView() {
    this.carriersService.carrierConfiguration = [this.carriersService.carrierSelected, this.carriersService.additionalServicesSelected, this.carriersService.cashOnDeliveryValue];

    this.getSelectedAdditionalServices();
    this.parcelService.summaryViewAvailable = true;
    this.router.navigateByUrl('/portal/parcel-summary');
  }

  checkSelection() {
    for (let i = 0; i < this.carriersService.carriers.length; i++) {
      if (this.carriersService.carriers[i].clicked === true) {
        this.carrierClickedForButton = false;
        this.parcelService.carrierIndex = i;
      }
    }
  }

  clearSelection() {
    for (let i = 0; i < this.carriersService.carriers.length; i++) {
      this.carriersService.carriers[i].clicked = false;
    }
  }

  selectCarrier(carrier, i) {
    switch (carrier) {
      case ('inpost'): {
        this.clearSelection();
        this.carriersService.carriers[i].clicked = true;
        this.carriersService.carrierSelected = carrier;
        this.calculateFinalPrice(i, undefined);
        break;
      }
      case ('dhl'): {
        this.clearSelection();
        this.carriersService.carriers[i].clicked = true;
        this.carriersService.carrierSelected = carrier;
        this.calculateFinalPrice(i, undefined);
        break;
      }
      case ('ups'): {
        this.clearSelection();
        this.carriersService.carriers[i].clicked = true;
        this.carriersService.carrierSelected = carrier;
        this.calculateFinalPrice(i, undefined);
        break;
      }
      case ('patron'): {
        this.clearSelection();
        this.carriersService.carriers[i].clicked = true;
        this.carriersService.carrierSelected = carrier;
        this.calculateFinalPrice(i, undefined);
        break;
      }
    }
    this.checkSelection()
  }

  calculateFinalPrice(serviceIndex, additionalServiceIndex) {
    if (additionalServiceIndex !== undefined) {
      let price = Number(this.carriersService.carriers[serviceIndex].additionalService[additionalServiceIndex].price);
      let selection = this.carriersService.carriers[serviceIndex].additionalService[additionalServiceIndex].isSelected;
      if (selection === true) {
        this.carriersService.carriers[serviceIndex].netPrice = Number(this.carriersService.carriers[serviceIndex].netPrice) + price;
        this.carriersService.carriers[serviceIndex].netPrice = Number(this.carriersService.carriers[serviceIndex].netPrice).toFixed(2);
        this.carriersService.carriers[serviceIndex].grossPrice = (Number(this.carriersService.carriers[serviceIndex].netPrice) * 1.23).toFixed(2);
      } else if (selection === false) {
        this.carriersService.carriers[serviceIndex].netPrice = Number(this.carriersService.carriers[serviceIndex].netPrice) - price;
        this.carriersService.carriers[serviceIndex].netPrice = Number(this.carriersService.carriers[serviceIndex].netPrice).toFixed(2);
        this.carriersService.carriers[serviceIndex].grossPrice = (Number(this.carriersService.carriers[serviceIndex].netPrice) * 1.23).toFixed(2);
      }
    }
    this.parcelService.finalSingleNetPrice = this.carriersService.carriers[serviceIndex].netPrice;
    this.parcelService.finalSingleGrossPrice = this.carriersService.carriers[serviceIndex].grossPrice;
  }

  getSelectedAdditionalServices() {
    let services = this.carriersService.carriers[this.parcelService.carrierIndex].additionalService;

    if (services !== undefined) {
      for (let i = 0; i < this.carriersService.carriers[this.parcelService.carrierIndex].additionalService.length; i++) {
        if (services[i].isSelected) {
          this.carriersService.additionalServicesSelected.push([services[i].name, services[i].text]);
        }
      }
    }
  }

}
