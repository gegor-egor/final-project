import {pokemonActionTypes} from "./pokemon.action-types";

const defaultState = {
    isLoading: false,
    error: null,
    data: null,
}

export const pokemonReducer = (state = defaultState, action) => {
    const {type, payload} = action
    switch (type) {
        case pokemonActionTypes.POKEMON_LOADING:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case pokemonActionTypes.POKEMON_LOADING_SUCCESS:
            return {
                ...state,
                data: payload,
                error: null,
                isLoading: false
            }

        case pokemonActionTypes.POKEMON_LOADING_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state
    }
}
