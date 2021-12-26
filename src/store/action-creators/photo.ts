import axios from "axios"
import { Dispatch } from "redux"
import { ImageAction, ImagesActionTypes } from "../../types/image"

export const fetchPhotos = () => {
    return async (dispatch: Dispatch<ImageAction>) => {
        try {
            dispatch({ type: ImagesActionTypes.FETCH_IMAGES })
            const res = await axios.get('https://boiling-refuge-66454.herokuapp.com/images')
            setTimeout(() =>
                dispatch({ type: ImagesActionTypes.FETCH_IMAGES_SUCCESS, payload: res.data }), 1000)
        } catch (error) {
            dispatch({ type: ImagesActionTypes.FETCH_IMAGES_ERROR, payload: 'Ошибка загрузки пользователей ' })
        }
    }
}