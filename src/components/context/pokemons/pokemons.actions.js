import {actionTypes} from "./pokemons.action-types";
import axios from "axios";
import { POKEMONS_PER_PAGE } from "../../../constants";

export const pokemonsActions = {
    load: () => ({
        type: actionTypes.POKEMONS_LOADING,
    }),
    success: (payload) => ({
        type: actionTypes.POKEMONS_LOADING_SUCCESS,
        payload
    }),
    error: (payload) => ({
        type: actionTypes.POKEMONS_LOADING_ERROR,
        payload
    }),
    updatePage: (page) => ({
        type: actionTypes.POKEMONS_UPDATE_PAGE,
        payload: page
    })
}

/** complex actions */
export const loadPokemons = (dispatch) => async (page) => {
    dispatch(pokemonsActions.load())
    try {
        const all = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMONS_PER_PAGE}&offset=${(page - 1) * POKEMONS_PER_PAGE}`)
        const pokeArr = []
        for (let i = 0; i < all.data.results.length; i++) {
            const poke = all.data.results[i]
            const pokeImg = await axios.get(poke.url)
            const pokeUrlArr = poke.url.split("/")
            const pokeId = pokeUrlArr[pokeUrlArr.length - 2]
            const pokeObj = {
                id: pokeId,
                name: poke.name,
                img: pokeImg.data.sprites.other['official-artwork'].front_default,
                url: poke.url,
            }
            pokeArr.push(pokeObj)
        }
        dispatch(pokemonsActions.success(pokeArr))
    } catch (e) {
        dispatch(pokemonsActions.error(e))
    }
}
