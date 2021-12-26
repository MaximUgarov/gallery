export interface IImages {
    id: number;
    url: string;
    setModal: () => void;
}


export interface IModalProps {
    hide: () => void;
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