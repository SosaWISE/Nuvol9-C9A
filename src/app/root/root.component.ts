/** LIBRARIES */
import { Component } from '@angular/core';

/** MODELS */
import { ISearchResultItem } from '../models/root.search.models';

@Component({
    selector: 'app-root-component',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class RootComponent {
    /** PROPERTIES */
    public rootContentPane = 'SearchPane';

    /** CONSTRUCTORS */
    constructor() {}

    /** Methods */
    public onOpenClaim(claim: ISearchResultItem): void {
        /** Init */
        const self = this;
        self.rootContentPane = 'ClaimTabsPane';
    }

    public goBack(): void {
        this.rootContentPane = 'SearchPane';
    }
}
