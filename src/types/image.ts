

interface ImodalContentComments {
    id: number;
    text: string;
    date: number;
}

export interface ImodalContent {
    id: number;
    url: string;
    comments: ImodalContentComments[]
}


export interface ImageState {
    images: ImodalContent | any[],
    loading: boolean,
    error: null | string,
}

export enum ImagesActionTypes {
    FETCH_IMAGES = 'FETCH_IMAGES',
    FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS',
    FETCH_IMAGES_ERROR = 'FETCH_IMAGES_ERROR'
}

interface FetchImagesAction {
    type: ImagesActionTypes.FETCH_IMAGES;
}


interface FetchImagesSuccessAction {
    type: ImagesActionTypes.FETCH_IMAGES_SUCCESS;
    payload: ImodalContent[]
}

interface FetchImagesErrorAction {
    type: ImagesActionTypes.FETCH_IMAGES_ERROR;
    payload: string
}



export type ImageAction = FetchImagesAction | FetchImagesSuccessAction | FetchImagesErrorAction