import { NamedResource } from './named-resource';

export interface PokemonStatResponse {
    base_stat: number;
    effort: number;
    stat: NamedResource;
}
