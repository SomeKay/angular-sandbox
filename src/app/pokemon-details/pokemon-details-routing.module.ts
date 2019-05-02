import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './containers/pokemon-details/pokemon-details.component';

export const routes: Routes = [
    {
        path: ':name',
        component: PokemonDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonDetailsRoutingModule {}
