import { SET_PROJECT_LIST } from "./types";

const initialState = {
    projectList: []
}

const projectManagerReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_PROJECT_LIST:
            return {...state, projectList: payload }

        default:
            return state
    }
}
export default projectManagerReducer;