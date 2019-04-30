import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'pkmn-list-paging',
    templateUrl: './list-paging.component.html'
})
export class ListPagingComponent {
    @Input()
    previousUrl: string;

    @Input()
    nextUrl: string;

    @Output()
    paging: EventEmitter<string> = new EventEmitter();

    pagingClicked(url: string): void {
        this.paging.emit(url);
    }
}
