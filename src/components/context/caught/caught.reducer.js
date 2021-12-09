import {caughtActionTypes} from "./caught.action-types";

const defaultState = {
    items: []
}

export const caughtReducer = (state = defaultState, action) => {
    const {type, payload} = action
    switch (type) {
        case caughtActionTypes.POKEMON_CATCH:
            return {
                ...state,
                items: [...state.items, payload],
            }
        default:
            return state
    }
}
