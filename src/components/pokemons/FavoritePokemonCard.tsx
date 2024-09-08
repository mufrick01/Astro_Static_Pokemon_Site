import type { FavoritePokemon } from "@interfaces/favorite-pokemon"
import { createSignal, Show, type Component } from "solid-js"

interface Props {
    pokemon: FavoritePokemon
}


export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {

    const { id, name } = pokemon
    const [isVisible, setIsVisible] = createSignal(true)
    const imgSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    const deletePokemonFromLocalStorage = () => {

        const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[]
        const newFavorites = favorites.filter(p => p.name !== name)
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        setIsVisible(false);

    }


    return (
        <Show when={isVisible()}>
            <div class="flex flex-col justify-center items-center">
                <a href={`/pokemons/${name}`}>
                    <img src={imgSource} alt="" style={`view-transition-name:${name}-image`} />
                    <h2 class="text-center capitalize">#{id} {name}</h2>
                </a>
                <button class="text-red-700" onClick={deletePokemonFromLocalStorage}>
                    Eliminar
                </button>
            </div>
        </Show>
    )
}