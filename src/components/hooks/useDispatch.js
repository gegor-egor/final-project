import {useContext} from "react";
import {PokemonContext} from "../context/pokemonsContext";

export const useDispatch = () => {
    const {dispatch} = useContext(PokemonContext)
    return dispatch
}
