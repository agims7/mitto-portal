import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParcelService } from '../services/parcel.service';
import { CarriersService } from '../services/carriers.service';
import { AppService } from '../services/app.service';
import * as _ from 'lodash';

@Component({
  selector: 'mitto-type-and-address',
  templateUrl: './type-and-address.component.html',
  styleUrls: ['./type-and-address.component.less']
})
export class TypeAndAddressComponent implements OnInit {
  public range = _.range(1, 11);
  public sizeRange: any = ['Paleta 120x80cm', 'Półpaleta 60x80cm', 'Paleta przemysłowa 120x120cm'];
  public addresses: any = ['Adres prywatny)'];
  public countries: any = ['Polska'];
  public senderSelectedAddress: any;
  public recipientSelectedAddress: any;

  constructor (
    private router: Router,
    public parcelService: ParcelService,
    public carriersService: CarriersService,
    public appService: AppService
  ) { }

  ngOnInit() {

  }

  setSenderFromAddresses() {
    this.parcelService.senderCountry = this.appService.userCountry;
    this.parcelService.senderCompanyName = this.appService.userCompanyName;
    this.parcelService.senderNameAndSurname = this.appService.userName + " " + this.appService.userSurname;
    this.parcelService.senderAddress = this.appService.streetAndNumber;
    this.parcelService.senderPostalCode = this.appService.postalCode;
    this.parcelService.senderCity = this.appService.cityName;
    this.parcelService.senderTelephone = this.appService.phoneNumber;
    this.parcelService.senderEmail = this.appService.emailAddress;
  }

  setRecipientFromAddresses() {
    this.parcelService.recipientCountry = this.appService.userCountry;
    this.parcelService.recipientCompanyName = this.appService.userCompanyName;
    this.parcelService.recipientNameAndSurname = this.appService.userName + " " + this.appService.userSurname;
    this.parcelService.recipientAddress = this.appService.streetAndNumber;
    this.parcelService.recipientPostalCode = this.appService.postalCode;
    this.parcelService.recipientCity = this.appService.cityName;
    this.parcelService.recipientTelephone = this.appService.phoneNumber;
    this.parcelService.recipientEmail = this.appService.emailAddress;
  }

  onSubmit() {
    this.parcelService.packageConfiguration = [this.parcelService.packageType, this.parcelService.numberOfPackages, this.parcelService.totalValue, this.parcelService.parcelWeight, this.parcelService.parcelLength, this.parcelService.parcelWidth, this.parcelService.parcelHeight, this.parcelService.paletteSize];

    this.parcelService.senderConfiguration = [this.parcelService.senderCountry, this.parcelService.senderCompanyName, this.parcelService.senderNameAndSurname, this.parcelService.senderAddress, this.parcelService.senderPostalCode, this.parcelService.senderCity, this.parcelService.senderTelephone, this.parcelService.senderEmail, this.parcelService.senderComment];

    this.parcelService.recipientConfiguration = [this.parcelService.recipientCountry, this.parcelService.recipientCompanyName, this.parcelService.recipientNameAndSurname, this.parcelService.recipientAddress, this.parcelService.recipientPostalCode, this.parcelService.recipientCity, this.parcelService.recipientTelephone, this.parcelService.recipientEmail];
  
    this.carriersService.carrierViewAvailable = true;
    this.router.navigateByUrl('/portal/carrier');
  }

}
