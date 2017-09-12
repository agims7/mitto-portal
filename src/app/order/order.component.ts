import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../services/order.service';
import { ParcelService } from '../services/parcel.service';
import { CarriersService } from '../services/carriers.service';
import { AppService } from '../services/app.service';
import { Order } from '../classes/order';
import * as _ from 'lodash';

@Component({
  selector: 'mitto-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {
  public selectedOrderNumber: string;
  public selectedOrderSubscription;
  public orderIndex: number;
  public order;
  public selectedIndex: number;
  public selectEverything: boolean = false;
  public selectionEnable: boolean = false;
  public enableDetails: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public orderService: OrderService,
    public parcelService: ParcelService,
    public carriersService: CarriersService,
    public appService: AppService
  ) { }

  ngOnInit() {
    this.selectedOrderSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedOrderNumber = params.id
    });
    this.orderIndex = _.findIndex(this.orderService.ordersList, ['orderNumber', this.selectedOrderNumber]);
    this.order = this.orderService.ordersList[this.orderIndex];
  }

  printLabel() {
    console.log('print label')
  }

  getDetails() {
    // this.router.navigate(['/portal/order', this.orderService.ordersList[this.selectedIndex].orderNumber]);
  }

  navigateBack() {
    this.router.navigate(['/portal/orders']);
  }

  changeSelection() {
    if (this.selectEverything === true) {
      for (let i = 0; i < this.orderService.ordersList.length; i++) {
        this.orderService.ordersList[i].selected = true;
      }
      this.selectionEnable = true;
    } else {
      for (let i = 0; i < this.orderService.ordersList.length; i++) {
        this.orderService.ordersList[i].selected = false;
      }
      this.selectionEnable = false;
    }
    this.checkSelection();
  }

  checkSelection() {
    if (this.orderService.ordersList.length > 0) {
      let orderLength = this.orderService.ordersList.length;
      let selected = 0;
      let unchecked = 0;
      let selectionArray = [];
      for (let i = 0; i < this.orderService.ordersList.length; i++) {
        if (this.orderService.ordersList[i].selected === true) {
          selected++;
          selectionArray.push(i);
        } else {
          unchecked++;
        }
      }
      if (selected > 0 && selected === orderLength) {
        this.selectEverything = true;
        this.selectionEnable = true;
      } else if (selected > 0 && selected !== orderLength) {
        this.selectEverything = false;
        this.selectionEnable = true;
      } else if (unchecked > 0 && unchecked === orderLength) {
        this.selectEverything = false;
        this.selectionEnable = false;
      } else {
        this.selectionEnable = false;
      }
      if (selected === 1) {
        this.enableDetails = true;
        this.selectedIndex = selectionArray[0];
      } else {
        this.enableDetails = false;
      }
    }
  }

  ngOnDestroy() {
    this.appService.safeUnsubscribe(this.selectedOrderSubscription);
  }

}
