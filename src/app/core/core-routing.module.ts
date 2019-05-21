import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: '../pokemon-list/pokemon-list.module#PokemonListModule'
    },
    {
        path: 'pokemon',
        loadChildren:
            '../pokemon-details/pokemon-details.module#PokemonDetailsModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class CoreRoutingModule {}
