//** LIBRARIES */
import { Component, OnInit } from '@angular/core';

//** MODELS */
import { ISearchResultItem } from '../models/root.search.models';

@Component({
    selector: 'root-search-component',
    templateUrl: './root.search.component.html',
    styleUrls: ['./root.search.component.scss']
})
export class RootSearchComponent implements OnInit {
    /** PORPERTIES */
    public searchResult: ISearchResultItem[] = [];

    /** CONSTRUCTOR */
    constructor() {}

    //**#region START Base Methods */
    ngOnInit(): void {
        //** Init */
        let self = this;

        self.searchResult = [{
            claimNumber: '001234-AC01',
            claimStatus: 1,
            fullName: 'Sammy E. Jones',
            address: '794 E 3650 N; Provo UT 84604',
            phone: '(801) 807-2345'
        },{
            claimNumber: '001235-AC01',
            claimStatus: 1,
            fullName: 'Jackson A. Aurthor',
            address: '1240 E Canyon View Dr.; Logan UT 84604',
            phone: '(801) 789-0987'
        },{
            claimNumber: '001236-AC01',
            claimStatus: 1,
            fullName: 'Manuel Aragon Ortega',
            address: '890 N Mohavie Ln; Murrey UT 84003',
            phone: '(801) 234-0987'
        },{
            claimNumber: '001237-AC01',
            claimStatus: 1,
            fullName: 'Sammy E. Jones',
            address: '794 E 3650 N; Provo UT 84604',
            phone: '(801) 807-2345'
        },{
            claimNumber: '001238-AC01',
            claimStatus: 1,
            fullName: 'Sammy E. Jones',
            address: '794 E 3650 N; Provo UT 84604',
            phone: '(801) 807-2345'
        }];
    }
    //**#endregion END   Base Methods */

    public submitMe(): void {
        alert("JES is true.  I'm Nacho...");
    }
}