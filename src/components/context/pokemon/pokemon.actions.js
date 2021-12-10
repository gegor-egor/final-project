import { pokemonActionTypes } from "./pokemon.action-types";
import axios from "axios";
import { speedDialIconClasses } from "@mui/material";

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

const findInGenderList = (genderMap, pokemonName) => {
    const { pokemon_species_details } = genderMap
    const isInList = pokemon_species_details.findIndex((element) => element.pokemon_species.name === pokemonName)
    return !!(~isInList)
}

export const loadPokemon = (dispatch) => async (id) => {
    dispatch(pokemonActions.load())
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const female = await axios.get(`https://pokeapi.co/api/v2/gender/1`)
    const male = await axios.get(`https://pokeapi.co/api/v2/gender/2`)
    const genderless = await axios.get(`https://pokeapi.co/api/v2/gender/3`)
    const name = res.data.species.name
    const isMale = findInGenderList(male.data, name)
    const isFemale = findInGenderList(female.data, name)
    const isGenderLess = findInGenderList(genderless.data, name)
    dispatch(pokemonActions.success({ ...res.data, gender: [isMale ? "male" : "", isFemale ? "female" : "", isGenderLess ? "genderless" : ""].filter(Boolean) }))
}
