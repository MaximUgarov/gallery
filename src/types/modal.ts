import { ImodalContent } from './image';

export interface ModalState {
    modal: boolean,
    content_id: 0 | number
    content: ImodalContent ,
    loading: boolean,
    error: null | string
}

export enum ModalActionTypes {
    TOGGLE_MODAL = 'TOGGLE_MODAL',
    FETCH_MODAL = 'FETCH_MODAL',
    FETCH_MODAL_SUCCESS = 'FETCH_MODAL_SUCCESS',
    FETCH_MODAL_ERROR = 'FETCH_MODAL_ERROR'
}

interface ToggleModal {
    type: ModalActionTypes.TOGGLE_MODAL
    modal: boolean
    content_id: number
}

interface FetchModalAction {
    type: ModalActionTypes.FETCH_MODAL
}

interface FetchModalSuccesAction {
    type: ModalActionTypes.FETCH_MODAL_SUCCESS
    payload: ImodalContent
}

interface FetchModalErrorAction {
    type: ModalActionTypes.FETCH_MODAL_ERROR
    payload: string
}

export type ModalAction = ToggleModal | FetchModalAction | FetchModalSuccesAction | FetchModalErrorAction