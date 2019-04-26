import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PokemonDetailsModule } from '../pokemon-details/pokemon-details.module';
import { PokemonListModule } from '../pokemon-list/pokemon-list.module';
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
        PokemonListModule,
        PokemonDetailsModule,
        StoreModule.forRoot({}, { metaReducers }),
        EffectsModule.forRoot([])
    ]
})
export class CoreModule {}
