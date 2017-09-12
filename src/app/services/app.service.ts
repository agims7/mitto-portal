import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    public windowWidth: any = window.innerWidth;
    public mobileView: boolean = false;
    public mobileViewHoverClass: boolean = false;
    public urlAddress: string;
    public screenResolutionBreakPoint: number = 1200; //px

    public emailAddress: string = 'jan.kowalski@xx.xx';
    public phoneNumber: string = '600600600';
    public cityName: string = 'Warszawa';
    public postalCode: any = '40-000';
    public streetAndNumber: string = 'Warszawska 45/68';
    public userCompanyName: string = 'KOWALSKY';
    public userSurname: string = 'Kowalski';
    public userName: string = 'Jan';
    public userCountry: string = 'Polska';

    constructor() { }

    getWindowWidth() {
        if (this.windowWidth <= this.screenResolutionBreakPoint) {
            this.mobileView = true;
        } else {
            this.mobileView = false;
        }
    }

    safeUnsubscribe(subscription) {
        try {
            subscription.unsubscribe();
        }
        catch (err) {
            if (typeof subscription !== 'undefined') { //bo jebało błędami na prawo i lewo
                console.warn(err);
            }
        }
    }

}
