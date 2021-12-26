import { combineReducers } from 'redux'
import { photoReducer } from './photosReducer'
import { modalReducer } from './modalReducer'

export const rootReducers = combineReducers({
    photos: photoReducer,
    modal: modalReducer
})

export type RootState = ReturnType<typeof rootReducers>
