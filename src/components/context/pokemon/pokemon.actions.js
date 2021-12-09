import { pokemonActionTypes } from "./pokemon.action-types";
import axios from "axios";

export const pokemonActions = {
    load: () => ({
        type: pokemonActionTypes.POKEMON_LOADING,
    }),
    success: (payload) => ({
        type: pokemonActionTypes.POKEMON_LOADING_SUCCESS,
        payload
    }),
    error: (payload) => ({
        type: pokemonActionTypes.POKEMON_LOADING_ERROR,
        payload
    })
}

/** complex actions*/

export const loadPokemon = (dispatch) => async (id) => {
    dispatch(pokemonActions.load())
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const gender = await axios.get(`https://pokeapi.co/api/v2/gender/${id}`)
    dispatch(pokemonActions.success({ ...res.data, gender: gender.data }))
}
