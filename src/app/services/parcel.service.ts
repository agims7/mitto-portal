import { Injectable } from '@angular/core';

@Injectable()
export class ParcelService {
  public packageType: string = 'parcel';
  public numberOfPackages: number;
  public totalValue: number;
  public parcelWeight: number;
  public parcelLength: number;
  public parcelWidth: number;
  public parcelHeight: number;
  public paletteSize: any;
  public senderCountry: string;
  public senderCompanyName: string;
  public senderNameAndSurname: string;
  public senderAddress: string;
  public senderPostalCode: string;
  public senderCity: string;
  public senderTelephone: string;
  public senderEmail: string;
  public senderComment: string;
  public recipientCountry: string;
  public recipientCompanyName: string;
  public recipientNameAndSurname: string;
  public recipientAddress: string;
  public recipientPostalCode: string;
  public recipientCity: string;
  public recipientTelephone: string;
  public recipientEmail: string;

  public carrierIndex: number;

  public finalSingleNetPrice: any;
  public finalSingleGrossPrice: any;
  public finalNetPrice: any;
  public finalGrossPrice: any;

  public orderNumber: string;
  public orderDate: string;
  public selected: boolean = false; //For orders

  public summaryViewAvailable: boolean = false;

  public packageConfiguration: any = [];
  public senderConfiguration: any = [];
  public recipientConfiguration: any = [];
  public priceConfiguration: any = [];

  constructor() { }

  clearParcelServiceValues() {
    this.packageType = undefined;
    this.numberOfPackages = undefined;
    this.totalValue = undefined;
    this.parcelWeight = undefined;
    this.parcelLength = undefined;
    this.parcelWidth = undefined;
    this.parcelHeight = undefined;
    this.paletteSize = undefined;
    this.senderCountry = undefined;
    this.senderCompanyName = undefined;
    this.senderNameAndSurname = undefined;
    this.senderAddress = undefined;
    this.senderPostalCode = undefined;
    this.senderCity = undefined;
    this.senderTelephone = undefined;
    this.senderEmail = undefined;
    this.senderComment = undefined;
    this.recipientCountry = undefined;
    this.recipientCompanyName = undefined;
    this.recipientNameAndSurname = undefined;
    this.recipientAddress = undefined;
    this.recipientPostalCode = undefined;
    this.recipientCity = undefined;
    this.recipientTelephone = undefined;
    this.recipientEmail = undefined;
    this.carrierIndex = undefined;
    this.finalSingleNetPrice = undefined;
    this.finalSingleGrossPrice = undefined;
    this.finalNetPrice = undefined;
    this.finalGrossPrice = undefined;
    this.orderNumber = undefined;
    this.selected = false
    this.summaryViewAvailable = false;
    this.packageConfiguration = [];
    this.senderConfiguration = [];
    this.recipientConfiguration = [];
    this.priceConfiguration = [];
  }

}
