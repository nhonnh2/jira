import { CLOSE_MODAL_FORM, SHOW_MODAL_EDIT_PROJECT } from "./types"

export const actShowModalEditProject = (data) => {
    return { type: SHOW_MODAL_EDIT_PROJECT, payload: data }
}
export const actCloseModalForm = () => {
    return { type: CLOSE_MODAL_FORM }
}