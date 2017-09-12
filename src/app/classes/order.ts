export class Order {
    //Order number
    orderNumber: string;
    orderDate: string;
    //Parcel
    packageType: string;
    numberOfPackages: number;
    totalValue: number;
    parcelWeight: number;
    parcelLength: number;
    parcelWidth: number;
    parcelHeight: number;
    paletteSize: any;

    //Sender
    senderCountry: string;
    senderCompanyName: string;
    senderNameAndSurname: string;
    senderAddress: string;
    senderPostalCode: string;
    senderCity: string;
    senderTelephone: string;
    senderEmail: string;
    senderComment: string;

    recipientCountry: string;
    recipientCompanyName: string;
    recipientNameAndSurname: string;
    recipientAddress: string;
    recipientPostalCode: string;
    recipientCity: string;
    recipientTelephoneName: string;
    recipientEmail: string;

    //Carrier
    carrierSelected: string;
    //carrierIndex: number;   moze sie przyda ?????
    additionalServicesSelected: any;
    cashOnDeliveryValue: number;

    //Final prices
    finalSingleNetPrice: any;
    finalSingleGrossPrice: any;
    finalNetPrice: any;
    finalGrossPrice: any;

    //For orders
    selected: boolean;

    constructor([packageType, numberOfPackages, totalValue, parcelWeight, parcelLength, parcelWidth, parcelHeight, paletteSize], [senderCountry, senderCompanyName, senderNameAndSurname, senderAddress, senderPostalCode, senderCity, senderTelephone, senderEmail, senderComment], [recipientCountry, recipientCompanyName, recipientNameAndSurname, recipientAddress, recipientPostalCode, recipientCity, recipientTelephoneName, recipientEmail], [carrierSelected, additionalServicesSelected, cashOnDeliveryValue], [finalSingleNetPrice, finalSingleGrossPrice, finalNetPrice, finalGrossPrice, orderNumber, orderDate, selected]) {
        this.packageType = packageType;
        this.numberOfPackages = numberOfPackages;
        this.totalValue = totalValue;
        this.parcelWeight = parcelWeight;
        this.parcelLength = parcelLength;
        this.parcelWidth = parcelWidth;
        this.parcelHeight = parcelHeight;
        this.paletteSize = paletteSize;
        this.senderCountry = senderCountry;
        this.senderCompanyName = senderCompanyName;
        this.senderNameAndSurname = senderNameAndSurname;
        this.senderAddress = senderAddress;
        this.senderPostalCode = senderPostalCode;
        this.senderCity = senderCity;
        this.senderTelephone = senderTelephone;
        this.senderEmail = senderEmail;
        this.senderComment = senderComment;
        this.recipientCountry = recipientCountry;
        this.recipientCompanyName = recipientCompanyName;
        this.recipientNameAndSurname = recipientNameAndSurname;
        this.recipientAddress = recipientAddress;
        this.recipientPostalCode = recipientPostalCode;
        this.recipientCity = recipientCity;
        this.recipientTelephoneName = recipientTelephoneName;
        this.recipientEmail = recipientEmail;
        this.carrierSelected = carrierSelected;
        this.additionalServicesSelected = additionalServicesSelected;
        this.cashOnDeliveryValue = cashOnDeliveryValue;
        this.finalSingleNetPrice = finalSingleNetPrice;
        this.finalSingleGrossPrice = finalSingleGrossPrice;
        this.finalNetPrice = finalNetPrice;
        this.finalGrossPrice = finalGrossPrice;
        this.orderNumber = orderNumber;
        this.orderDate = orderDate;
        this.selected = selected;
    }
}
