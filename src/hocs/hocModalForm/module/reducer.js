import { TITLE_EDIT_PROTJECT } from "./title"
import { CLOSE_MODAL_FORM, SHOW_MODAL_EDIT_PROJECT } from "./types"

const initialState = {
    visible: true,
    title: ""
}

const modalFormReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case CLOSE_MODAL_FORM:
            return {...state, visible: false, title: "" }
        case SHOW_MODAL_EDIT_PROJECT:
            return {...state, visible: true, title: TITLE_EDIT_PROTJECT }

        default:
            return state
    }
}
export default modalFormReducer