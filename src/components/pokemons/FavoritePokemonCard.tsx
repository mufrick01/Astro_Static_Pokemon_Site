import type { FavoritePokemon } from "@interfaces/favorite-pokemon"
import { createSignal, type Component } from "solid-js"

interface Props {
    pokemon: FavoritePokemon
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {

    const { id, name } = pokemon
    const [isVisible, setIsVisible] = createSignal(true)
    const imgSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return (
        <div class="flex flex-col justify-center items-center">
            <a href={`/pokemons/${name}`}>
                <img src={imgSource} alt="" />
                <h2 class="text-center capitalize">#{id} {name}</h2>
            </a>
        </div>
    )
}