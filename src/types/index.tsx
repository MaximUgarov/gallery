export interface IImages {
    id: number;
    url: string;
    setModal: () => void;
}
export interface ImodalContentComments {
    id: number;
    text: string;
    date: number;
}

export interface ImodalContent {
    id: number;
    url: string;
    comments: ImodalContentComments[]
}

export interface IModalProps {
    isShown: boolean;
    hide: () => void;
    content_id?: number;
}

export interface IModalFormData {
    name: string;
    text: string;
}

export interface IModalFormProps {
    onSumbit: (data: IModalFormData) => Promise<boolean>;
}

export interface ImodalRes {
    status: number | undefined
}