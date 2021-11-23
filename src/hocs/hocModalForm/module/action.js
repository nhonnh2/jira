import { CLOSE_MODAL_FORM, SHOW_MODAL_CREATE_TASK, SHOW_MODAL_EDIT_PROJECT } from "./types"

export const actShowModalEditProject = (data) => {
    return { type: SHOW_MODAL_EDIT_PROJECT, payload: data }
}
export const actShowModalCreateTask = () => {
    return { type: SHOW_MODAL_CREATE_TASK }
}
export const actCloseModalForm = () => {
    return { type: CLOSE_MODAL_FORM }
}