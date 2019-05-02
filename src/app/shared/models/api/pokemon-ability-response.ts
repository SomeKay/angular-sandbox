import { NamedResource } from './named-resource';

export interface PokemonAbilityResponse {
    ability: NamedResource;
    is_hidden: boolean;
    slot: number;
}
