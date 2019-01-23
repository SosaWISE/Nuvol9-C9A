//** LIBRARIES */
import { Component, OnInit, Input } from '@angular/core';

//** MODELS */
import { IPagingInfo } from '../models/utl/paging.models';

@Component({
    selector: 'lib-paging',
    templateUrl: './lib.paging.component.html'
})
export class LibPagingComponent implements OnInit {
    @Input() pagingInfo: IPagingInfo = null;

    //**#region Base Methods */
    ngOnInit() {}
    //**#endregion Base Methods */

    //**#region Supporting Methods */
    public counter(): number[] {
        //** Init */
        let self = this;
        let result: number[] = [];

        //** Check */
        if (self.pagingInfo && self.pagingInfo.totalPages) {
            let counter = 1;
            do {
                result.push(counter);
                counter++;
            }
            while(counter <= self.pagingInfo.totalPages)
        }

        //** Default response */
        return result;
    }
    public getTotalPages(): number {
        //** Init */
        let self = this;

        if (!self.pagingInfo) return 1;  // Default response

        //** Return length */
        return self.pagingInfo.totalPages;
    }
    public isCurrentPage(pageNumber: number): boolean {
        //** Init */
        let self = this;

        //** Check */
        if (self.pagingInfo && self.pagingInfo.currentPage == pageNumber) return true;

        //** Return default */
        return false;
    }
    //**#endregion Supporting Methods */
}