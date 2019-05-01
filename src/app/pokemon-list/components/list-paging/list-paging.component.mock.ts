import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'pkmn-list-paging',
    template: './list-paging.component.html'
})
export class MockListPagingComponent {
    @Input()
    previousUrl: string;

    @Input()
    nextUrl: string;

    @Output()
    paging: EventEmitter<string> = new EventEmitter();
}
