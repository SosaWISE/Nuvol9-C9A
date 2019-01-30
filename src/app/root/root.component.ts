//** LIBRARIES */
import { Component } from '@angular/core';

//** MODELS */
import { ISearchResultItem } from '../models/root.search.models';

@Component({
    selector: 'root-component',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class RootComponent {
    //** PROPERTIES */
    public rootContentPane: string = 'SearchPane';

    //** CONSTRUCTORS */
    constructor() {}

    //** Methods */
    public onOpenClaim(claim: ISearchResultItem): void {
        //** Init */
        let self = this;
        self.rootContentPane = 'ClaimTabsPane'
    }
}