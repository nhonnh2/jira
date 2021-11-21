import { TITLE_EDIT_PROTJECT } from "./title"
import { CLOSE_MODAL_FORM, SHOW_MODAL_EDIT_PROJECT } from "./types"

const initialState = {
    visible: false,
    title: "",
    data: {}
}

const modalFormReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case CLOSE_MODAL_FORM:
            return {...state, visible: false, title: "", data: {} }
        case SHOW_MODAL_EDIT_PROJECT:
            console.log("dispatch modalform payload", payload);
            return { visible: true, title: TITLE_EDIT_PROTJECT, data: payload }

        default:
            return state
    }
}
export default modalFormReducer