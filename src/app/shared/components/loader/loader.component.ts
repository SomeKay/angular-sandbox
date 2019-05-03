import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedStateService } from 'src/app/shared/state/services/shared-state.service';

@Component({
    selector: 'pkmn-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
    loading: number;
    subscriptions: Subscription = new Subscription();

    constructor(private sharedStateService: SharedStateService) {}

    ngOnInit() {
        this.subscriptions.add(
            this.sharedStateService.getLayoutState().subscribe(data => {
                this.loading = data.loading;
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
