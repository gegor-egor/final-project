import {caughtActionTypes} from "./caught.action-types";

export const caughtActions = {
    catch: (payload) => ({
        type: caughtActionTypes.POKEMON_CATCH,
        payload
    })
}
