export const combineReducers = (reducerMap) => {
    const entries = Object.entries(reducerMap)

    return function (state, action) {
        const nextState = {}
        entries.forEach(([reducerName, reducer]) => {
            nextState[reducerName] = reducer(state?.[reducerName], action)
        })
        return nextState
    }

}
