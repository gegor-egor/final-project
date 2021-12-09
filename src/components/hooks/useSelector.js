import {useContext} from "react";
import {PokemonContext} from "../context/pokemonsContext";

export const useSelector = (selectorFn) => {
    const {state} = useContext(PokemonContext)
    return selectorFn(state)
}
