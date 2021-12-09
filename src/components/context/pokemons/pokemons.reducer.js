import {actionTypes} from "./pokemons.action-types";

const defaultState = {
    isLoading: false,
    error: null,
    items: [],
    page: 1
}

export const pokemonsReducer = (state = defaultState, action) => {
    const {type, payload} = action
    switch (type) {
        case actionTypes.POKEMONS_LOADING:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case actionTypes.POKEMONS_LOADING_SUCCESS:
            return {
                ...state,
                items: [...state.items, ...payload],
                error: null,
                isLoading: false
            }
        case actionTypes.POKEMONS_LOADING_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        case actionTypes.POKEMONS_UPDATE_PAGE:
            return {
                ...state,
                page: payload || state.page + 1
            }
        default:
            return state
    }
}
