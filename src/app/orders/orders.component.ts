import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { ParcelService } from '../services/parcel.service';
import { CarriersService } from '../services/carriers.service';
import { Order } from '../classes/order';

@Component({
  selector: 'mitto-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less']
})
export class OrdersComponent implements OnInit {
  public selectedIndex: number;
  public selectEverything: boolean = false;
  public selectionEnable: boolean = false;
  public enableDetails: boolean = false;

  constructor(
    private router: Router,
    public orderService: OrderService,
    public parcelService: ParcelService,
    public carriersService: CarriersService
  ) { }

  ngOnInit() {
    console.log('oninit orders ', this.orderService.ordersList);
  }

  printLabel(index) {
    console.log('print label')
  }

  getDetails() {
    this.router.navigate(['/portal/order', this.orderService.ordersList[this.selectedIndex].orderNumber]);
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

  clearSelection() {
    for (let i = 0; i < this.orderService.ordersList.length; i++) {
      this.orderService.ordersList[i].selected = false;
    }
  }

  ngOnDestroy() {
    this.clearSelection();
  }

}
