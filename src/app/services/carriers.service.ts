import { Injectable } from '@angular/core';

@Injectable()
export class CarriersService {
  public carrierViewAvailable: boolean = false;
  public carrierSelected: string;
  public additionalServicesSelected: any = [];
  public cashOnDeliveryValue: number;
  public carrierConfiguration: any = [];
  public carriers: any = [
    {
      name: "inpost",
      iconSrcEnable: "../assets/img/in-post-logo.svg",
      iconSrcDisabled: "../assets/img/in-post-logo-disabled.svg",
      mainColor: "#f9c623",
      mainClass: "inpost",
      highlightClass: "highlightInPost",
      netPrice: 10.20,
      grossPrice: 12.91,
      estimatedDeliveryTime: "1-3 dni roboczych",
      carrierAvailable: false,
      clicked: false
    },
    {
      name: "dhl",
      iconSrcEnable: "../assets/img/dhl-logo.svg",
      iconSrcDisabled: "../assets/img/dhl-logo-disabled.svg",
      mainColor: "#f9c623",
      mainClass: "dhl",
      highlightClass: "highlightDhl",
      netPrice: 14.55,
      grossPrice: 17.89,
      estimatedDeliveryTime: "1 dzień roboczy",
      carrierAvailable: true,
      clicked: false
    },
    {
      name: "ups",
      iconSrcEnable: "../assets/img/ups-logo.svg",
      iconSrcDisabled: "../assets/img/ups-logo-disabled.svg",
      mainColor: "#351c15",
      mainClass: "ups",
      highlightClass: "highlightUps",
      netPrice: 14.55,
      grossPrice: 17.89,
      estimatedDeliveryTime: "1 dzień roboczy",
      carrierAvailable: false,
      clicked: false
    },
    {
      name: "patron",
      iconSrcEnable: "../assets/img/patron-logo.svg",
      iconSrcDisabled: "../assets/img/patron-logo-disabled.svg",
      mainColor: "#de1c32",
      mainClass: "patron",
      highlightClass: "highlightPatron",
      netPrice: 14.55,
      grossPrice: 17.89,
      estimatedDeliveryTime: "1 dzień roboczy",
      carrierAvailable: true,
      additionalService: [
        {
          name: "documentsReturn",
          isSelected: false,
          text: "zwrot dokumentow (+2 PLN)",
          price: 2
        },
        {
          name: "delivery9am",
          isSelected: false,
          text: "dostawa do (9:00) (+30 PLN)",
          price: 30
        },
        {
          name: "documentsReturn",
          isSelected: false,
          text: "dostawa do (12:00) (+15 PLN))",
          price: 15
        },
        {
          name: "additionalInsurance",
          isSelected: false,
          text: "dodatkowe ubezpieczenie",
          price: 0
        },
        {
          name: "cashOnDelivery",
          isSelected: false,
          text: "przesyłka pobraniowa (+2 PLN)",
          price: 2,
          additionalBox: true
        },
        {
          name: "telephoneNotification",
          isSelected: false,
          text: "awizacja telefoniczna (+2 PLN)",
          price: 2
        },
        {
          name: "emailNotification",
          isSelected: false,
          text: "awizacja email (+0 PLN)",
          price: 0
        },
        {
          name: "messageNotification",
          isSelected: false,
          text: "awizacja sms (+0.50 PLN)",
          price: 0.5
        },
      ],
      clicked: false
    }
  ]

  constructor() { }

  clearCarriersServiceValues() {
    this.carrierViewAvailable = false;
    this.carrierSelected = undefined;
    this.additionalServicesSelected = [];
    this.cashOnDeliveryValue = undefined;
    this.carrierConfiguration = [];

    for (let i = 0; i < this.carriers.length; i++) {
      this.carriers[i].clicked = false;
      if (this.carriers[i].additionalService !== undefined) {
        for (let x = 0; x < this.carriers[i].additionalService.length; x++) {
          this.carriers[i].additionalService[x].isSelected = false        
        }
      }
    }
    console.log(this.carriers);
  }

}
