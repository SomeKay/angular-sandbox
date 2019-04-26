import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { LoaderComponent } from './components/loader/loader.component';
import { ApiService } from './services/api.service';
import { reducers } from './state/reducers';
import { SharedStateService } from './state/services/shared-state.service';

@NgModule({
    declarations: [LoaderComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forFeature('shared', reducers)
    ],
    exports: [LoaderComponent]
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [ApiService, SharedStateService],
            exports: [SharedModule]
        };
    }
}
