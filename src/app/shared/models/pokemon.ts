import { PokemonAbility } from './pokemon-ability';
import { PokemonSprites } from './pokemon-sprites';
import { PokemonStat } from './pokemon-stat';
import { PokemonType } from './pokemon-type';

export interface Pokemon {
    id?: number;
    baseExperience?: number;
    name: string;
    weight?: number;
    height?: number;
    isDefault?: boolean;
    order?: number;
    abilities?: PokemonAbility[];
    sprites?: PokemonSprites;
    stats?: PokemonStat[];
    types?: PokemonType[];
}
