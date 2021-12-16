import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { IModalFormProps, IModalFormData } from '../../../types'


const Form: FC<IModalFormProps> = ({ onSumbit }: IModalFormProps) => {

    const [data, setData] = useState<IModalFormData>({ name: '', text: '', })

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const datatype = e.target.dataset.type || "name";
        const value: string = e.target.value
        const obj = { ...data, [datatype]: value }
        setData(obj)
    }


    const handlerSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const resStatus = await onSumbit(data)
        setData(resStatus ? { name: '', text: '' } : {...data})
    }

    return (
        <form className="modal-content-from" onSubmit={async (e) => { handlerSubmit(e) }}>
            <input type="name" required min-length="1" placeholder='Ваше имя' className="modal-content-form__input" data-type="name" onChange={(e) => handleInput(e)} value={data.name} />
            <input type="text" required min-length="1" placeholder='Ваш комментарий' className="modal-content-form__input" data-type="text" onChange={(e) => handleInput(e)} value={data.text} />
            <button className="modal-content-form__btn">Оставить комментарий</button>
        </form>
    );
};

export default Form;