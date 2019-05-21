import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './containers/app/app.component';
import { CoreRoutingModule } from './core-routing.module';
import { metaReducers } from './state/meta.reducers';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CoreRoutingModule,
        SharedModule.forRoot(),
        StoreModule.forRoot({}, { metaReducers }),
        EffectsModule.forRoot([])
    ]
})
export class CoreModule {}
