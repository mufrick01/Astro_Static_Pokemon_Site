import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritos = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    console.log(favoritos)
    return favoritos;
}

export const FavoritesPokemons = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons())
    return (
        <div class="grid grid-cols-2 sm:grid-cols-4" >
            <For each={pokemons()}>
                {
                 pokemon => <FavoritePokemonCard pokemon={pokemon}/>
                }
            </For>
        </div>
    )


}