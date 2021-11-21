import { DISPLAY_LODING, HIDE_LODING } from "./types"

const initialState = {
    isloading: false
}

const loaderReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case DISPLAY_LODING:
            console.log(state.isloading)
            return {...state, isloading: true }
        case HIDE_LODING:
            return {...state, isloading: false }

        default:
            return state
    }
}
export default loaderReducer