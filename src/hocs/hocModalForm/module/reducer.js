import { TITLE_CREARTE_TASK, TITLE_EDIT_PROTJECT } from "./title"
import { CLOSE_MODAL_FORM, SHOW_MODAL_CREATE_TASK, SHOW_MODAL_EDIT_PROJECT } from "./types"

const initialState = {
    type: "",
    title: "",
    data: {}
}

const modalFormReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case CLOSE_MODAL_FORM:
            return {...state, type, title: "", data: {} }
        case SHOW_MODAL_EDIT_PROJECT:
            return {...state, type, title: TITLE_EDIT_PROTJECT, data: payload }
        case SHOW_MODAL_CREATE_TASK:
            return {...state, type, title: TITLE_CREARTE_TASK }
        default:
            return state
    }
}
export default modalFormReducer