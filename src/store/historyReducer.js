const initialState = {
    history: {}
}

const historyReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case "ADD_HISTORY":
            return {...state, history: payload }

        default:
            return state
    }
}
export default historyReducer