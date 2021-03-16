import { GET_ALL_POKEMONS } from "./types";

export function getAllPokemons(count) {
    return async dispatch => {
            const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`);
            const json = await responce.json();

            const arrayEveryPokemon = [];
            for (let i = 1; i <= count; i++) {
                const every = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
                const transform = await every.json();
                arrayEveryPokemon.push(transform);
            }
        dispatch({
            type: GET_ALL_POKEMONS,
            payload: json.results,
            array: arrayEveryPokemon
        })
    }
}
