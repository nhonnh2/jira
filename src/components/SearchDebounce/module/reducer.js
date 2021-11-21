import { SET_LIST_SEARCH } from "./types"

const initialState = {
    listSearch: [],
}

const searChDebouceReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_LIST_SEARCH:
            return {...state, listSearch: payload }

        default:
            return state
    }
}
export default searChDebouceReducer