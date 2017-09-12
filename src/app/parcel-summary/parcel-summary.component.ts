import { Component, OnInit } from '@angular/core';
import { ParcelService } from '../services/parcel.service';
import { CarriersService } from '../services/carriers.service';
import { OrderService } from '../services/order.service';
import { Order } from '../classes/order';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'mitto-parcel-summary',
  templateUrl: './parcel-summary.component.html',
  styleUrls: ['./parcel-summary.component.less']
})
export class ParcelSummaryComponent implements OnInit {
  public carrierLogoSrc: string;

  constructor(
    public parcelService: ParcelService,
    public carriersService: CarriersService,
    public orderService: OrderService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.setOrderDate();   
    this.setRandomOrderNumber();
    this.calculateFInalPrices();
    this.setPriceConfiguration(); 
  }

  setRandomOrderNumber() {
    this.parcelService.orderNumber = Math.random().toString(36).substr(2, 8);
  }

  setOrderDate() {
    moment.locale('pl');
    this.parcelService.orderDate = moment().format('DD/MM/YYYY');
  }

  calculateFInalPrices() {
    this.parcelService.finalNetPrice = ((this.parcelService.finalSingleNetPrice * this.parcelService.numberOfPackages).toFixed(2));
    this.parcelService.finalGrossPrice = ((this.parcelService.finalSingleGrossPrice * this.parcelService.numberOfPackages).toFixed(2));
  }

  setPriceConfiguration() {
    this.parcelService.priceConfiguration = [this.parcelService.finalSingleNetPrice, this.parcelService.finalSingleGrossPrice, this.parcelService.finalNetPrice, this.parcelService.finalGrossPrice, this.parcelService.orderNumber, this.parcelService.orderDate, this.parcelService.selected];
  }

  createOrder() {
    let order = new Order(this.parcelService.packageConfiguration, this.parcelService.senderConfiguration, this.parcelService.recipientConfiguration, this.carriersService.carrierConfiguration, this.parcelService.priceConfiguration)

    this.orderService.ordersList.push(order)

    this.parcelService.clearParcelServiceValues();
    this.carriersService.clearCarriersServiceValues();
    this.router.navigateByUrl('/portal/order-to-cart');
  }

  finalizeOrder() {
    let order = new Order(this.parcelService.packageConfiguration, this.parcelService.senderConfiguration, this.parcelService.recipientConfiguration, this.carriersService.carrierConfiguration, this.parcelService.priceConfiguration)
    
    this.orderService.ordersList.push(order)
    
    this.parcelService.clearParcelServiceValues();
    this.carriersService.clearCarriersServiceValues();
    this.router.navigateByUrl('/portal/order-accepted');
  }

}
