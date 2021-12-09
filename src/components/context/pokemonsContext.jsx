import React, {useReducer} from "react"
import {combineReducers} from "./utils/combineReducers";
import {pokemonsReducer} from "./pokemons/pokemons.reducer";
import {pokemonReducer} from "./pokemon/pokemon.reducer";
import {caughtReducer} from "./caught/caught.reducer";

export const defaultPokemonContextValue = {}

export const PokemonContext = React.createContext(defaultPokemonContextValue)

const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    pokemon: pokemonReducer,
    caught: caughtReducer
})

export const PokemonsProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer, null)

    /** dispatching initial action to generate initial state*/
    /** WARNING: It's not a good idea to use INIT action type in other reducers, but you can */
    if (!state) dispatch({action: {type: "INIT"}})

    return (
        <PokemonContext.Provider value={{dispatch, state}}>
            {children}
        </PokemonContext.Provider>
    )
}
