
import { ModalState, ModalActionTypes, ModalAction } from '../../types/modal'

const initialState: ModalState = {
    modal: false,
    content_id: 0,
    content: null,
    loading: false,
    error: null,
}

export const modalReducer = (state = initialState, action: ModalAction): ModalState => {
    switch (action.type) {
        case ModalActionTypes.TOGGLE_MODAL:
            return {
                ...state,
                modal: action.modal,
                content_id: action.content_id
            }
        case ModalActionTypes.FETCH_MODAL:
            return {
                ...state,
                loading: true,
            }
        case ModalActionTypes.FETCH_MODAL_SUCCESS:
            return {
                ...state,
                loading: false,
                content: action.payload
            }
        case ModalActionTypes.FETCH_MODAL_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}