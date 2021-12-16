import React, { FC, Fragment, useState, useEffect } from 'react';
import './index.css'
import { IModalProps, ImodalContent } from '../../../types'
import { createPortal } from 'react-dom';
import { getDateByUnix } from '../methods/getDateByUnix';
import Form from './form'
import { onSumbit } from './methods/onSumbit';
import { getContent } from './methods/getContent';




const Modal: FC<IModalProps> = ({ isShown, hide, content_id }: IModalProps) => {

    const [content, setContent] = useState<ImodalContent>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(false)
        getContent(setContent, setIsLoading, content_id)
    }, [content_id])



    const modal = <Fragment>
        <div className="modal__background" onClick={hide} />
        <div className="modal-wrapper">
            <div className="modal-content">
                <div className="modal-content-wrapper">
                    {isLoading ? <img src={content?.url} alt="" className="modal-content__img" /> : <p>Загрузка</p>}
                </div>
                <Form onSumbit={async (data) => { return onSumbit(data, content_id) }} />
            </div>
            <div className="modal-comments">
                {isLoading ? content?.comments.length ? content.comments.map(i => <div className="modal-comments-wrapper" key={i.id}>
                    <p className="modal-comments-item__date">{getDateByUnix(new Date(i.date))}</p>
                    <p className="modal-comments-item__content">{i.text}</p>
                </div>) : <p className="modal-comments-item__content">Комментарии отстствуют</p> : <p>Загрузка</p>}
            </div>
        </div>
    </Fragment>

    return isShown ? createPortal(modal, document.body) : null;
};

export default Modal;