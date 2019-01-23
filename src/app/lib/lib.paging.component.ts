//** LIBRARIES */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//** MODELS */
import { IPagingInfo } from '../models/utl/paging.models';

@Component({
    selector: 'lib-paging',
    templateUrl: './lib.paging.component.html'
})
export class LibPagingComponent implements OnInit {
    @Input() pagingInfo: IPagingInfo = null;
    @Output() onPageEvent: EventEmitter<IPagingInfo> = new EventEmitter<IPagingInfo>();

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
    public showLeftArrow():boolean {
        //** Init */
        let self = this;

        //** Check that we are not at the end */
        if (self.pagingInfo.currentPage > 1 && self.pagingInfo.totalPages > 1) return true;

        //** Return default */
        return false;
    }
    public showRightArrow(): boolean {
        //** Init */
        let self = this;

        //** Check that we are not at the end */
        if (self.pagingInfo.currentPage < self.pagingInfo.totalPages && self.pagingInfo.totalPages > 1) return true;

        //** Return default */
        return false;
    }

    public pageRight(): void {
        //** Init */
        let self = this;

        //** Check if OK */
        if (self.pagingInfo.totalPages < self.pagingInfo.currentPage + 1) return;

        //** Move to the right */
        self.pagingInfo.currentPage = self.pagingInfo.currentPage + 1;

        //** Fire event */
        self.onPageEvent.emit(self.pagingInfo);
    }
    public pageLeft(): void {
        //** Init */
        let self = this;

        //** Check if OK */
        if (self.pagingInfo.currentPage - 1 <= 0) return;

        //** Move to the right */
        self.pagingInfo.currentPage = self.pagingInfo.currentPage - 1;

        //** Fire event */
        self.onPageEvent.emit(self.pagingInfo);
    }

    public gotoPage(pageNumber: number): void {
        //** Init */
        let self = this;

        //** Configure paging info */
        self.pagingInfo.currentPage = pageNumber;

        //** Fire event */
        self.onPageEvent.emit(self.pagingInfo);
    }
    //**#endregion Supporting Methods */
}