import axios from "axios"
import { Dispatch } from "redux"
import { ModalAction, ModalActionTypes } from "../../types/modal"
import { ImodalContent } from "../../types/photo"

export const ToggleModal = (content_id: number, modal: boolean) => {
    return (dispatch: Dispatch<ModalAction>) => {
        dispatch({ type: ModalActionTypes.TOGGLE_MODAL, modal: !modal, content_id: content_id })
    }
}

export const FetchModal = (content_id: number) => {
    return async (dispatch: Dispatch<ModalAction>) => {
        try {
            dispatch({ type: ModalActionTypes.FETCH_MODAL })
            const { data } = await axios.get<ImodalContent>(`https://boiling-refuge-66454.herokuapp.com/images/${content_id}`)
            dispatch({ type: ModalActionTypes.FETCH_MODAL_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: ModalActionTypes.FETCH_MODAL_ERROR, payload: 'Ошибка загрузки' })
        }
    }
}