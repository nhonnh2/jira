import { SET_PROJECT_DETAIL } from "./types"

const initialState = {
    projectDetail: {}
}

const projectDetailReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_PROJECT_DETAIL:
            return {...state, projectDetail: payload }

        default:
            return state
    }
}
export default projectDetailReducer