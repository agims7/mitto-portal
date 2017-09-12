import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ParcelService } from '../services/parcel.service';
import { CarriersService } from '../services/carriers.service';
import { Order } from '../classes/order';

@Component({
  selector: 'mitto-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  public selectedIndex: number;
  public selectEverything: boolean = false;
  public selectionEnable: boolean = false;

  constructor(
    public orderService: OrderService,
    public parcelService: ParcelService,
    public carriersService: CarriersService
  ) { }

  ngOnInit() {
    console.log('oninit orders ', this.orderService.ordersList);
  }

  deleteOrder(index) {
    this.orderService.ordersList.splice(index, 1);
  }

  deleteGroupOfOrders() {
    for (let i = this.orderService.ordersList.length - 1; i >= 0; i--) {
      if (this.orderService.ordersList[i].selected === true) {
        this.orderService.ordersList.splice(i, 1);
      }
    }
  }

  showMore(i) {
    if (this.selectedIndex !== undefined) {
      this.selectedIndex = undefined;
    } else {
      this.selectedIndex = i;
      this.selectionEnable = true;
    }
    this.checkSelection();
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
      for (let i = 0; i < this.orderService.ordersList.length; i++) {
        if (this.orderService.ordersList[i].selected === true) {
          selected++
        } else {
          unchecked++
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
      console.log('selected: ', selected, 'unchecked: ', unchecked, 'orderLength: ', orderLength)
    }
  }

}
