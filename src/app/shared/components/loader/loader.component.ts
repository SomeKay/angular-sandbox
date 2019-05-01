import { Component, OnInit } from '@angular/core';
import { SharedStateService } from 'src/app/shared/state/services/shared-state.service';

@Component({
    selector: 'pkmn-loader',
    templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {
    loading: number;

    constructor(private sharedStateService: SharedStateService) {}

    ngOnInit() {
        this.sharedStateService.getLayoutState().subscribe(data => {
            this.loading = data.loading;
        });
    }
}
