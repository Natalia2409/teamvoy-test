import { combineReducers } from "redux";
import { GET_ALL_POKEMONS } from "./types";

const initialStore = {
    allPokemons: [],
    arrayOfAll: []
}

export const rootReducer = combineReducers({
    allPokemons: getPokemon,
    arrayOfAll: getPokemon
});

export function getPokemon(state = initialStore, action) {
    switch(action.type) {
        case GET_ALL_POKEMONS:
            return {...state, allPokemons: action.payload, arrayOfAll: action.array}
        default: return state
    }
}
