/** LIBRARIES */
import { Component, OnInit } from '@angular/core';

/** MODELS */
interface IAccountSummary {
    productType: string;
    subAccount: string;
    customerName: string;
    street: string;
    cityStateZip: string;
    phone: string;
}

@Component({
    selector: 'app-dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    /** PROPERTIES */
    public accountList: IAccountSummary[] = [
        {
            productType: 'A',
            subAccount: '01',
            customerName: 'Andres Sosa',
            street: '1184 N 840 E',
            cityStateZip: 'Orem UT 84097',
            phone: '(801) 822-9323'
        }, {
            productType: 'A',
            subAccount: '02',
            customerName: 'Saul Sosa',
            street: '794 E 3950 N',
            cityStateZip: 'Provo UT 84604',
            phone: '(801) 224-7607'
        }, {
            productType: 'C',
            subAccount: '01',
            customerName: 'Cimtech Corp.',
            street: '747 S 100 E',
            cityStateZip: 'Provo UT 84606',
            phone: '(801) 375-6813'
        }, {
            productType: 'S',
            subAccount: '01',
            customerName: 'Saul Sosa',
            street: '747 S 100 E',
            cityStateZip: 'Provo UT 84606',
            phone: '(801) 375-6813'
        }, {
            productType: 'P',
            subAccount: '01',
            customerName: 'Saul Sosa',
            street: '747 S 100 E',
            cityStateZip: 'Provo UT 84606',
            phone: '(801) 375-6813'
        }
];

    /** CONSTRUCTORS */
    DashboardComponent() {}

//#region BASE METHODS
    ngOnInit(): void {
        console.info('Method not implemented.');
    }
//#endregion BASE METHODS
}
