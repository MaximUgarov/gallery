import React, { FC, Fragment, useEffect } from 'react';
import './index.css'
import { IModalProps } from '../../../types'
import { createPortal } from 'react-dom';
import { getDateByUnix } from '../methods/getDateByUnix';
import Form from './form'
import { onSumbit } from './methods/onSumbit';
import { useActions } from '../../../hooks/useAction';
import { useTypeSelector } from '../../../hooks/useTypeSelector';





const Modal: FC<IModalProps> = ({ hide }: IModalProps) => {
    const { content_id, loading, error, content, modal } = useTypeSelector(state => state.modal)
    const { FetchModal } = useActions()


    useEffect(() => {
        if(content_id !== 0) {
            FetchModal(content_id)
        }
    }, [content_id])



    const modalContent = <Fragment>
        <div className="modal__background" onClick={hide} />
        <div className="modal-wrapper">
            <div className="modal-content">
                <div className="modal-content-wrapper">
                    {!loading ? <img src={content.url} alt="" className="modal-content__img" /> : <p>Загрузка</p>}
                </div>
                <Form onSumbit={async (data) => { return onSumbit(data, content_id) }} />
            </div>
            <div className="modal-comments">
                {!loading ? content.comments.length ? content.comments.map(i => <div className="modal-comments-wrapper" key={i.id}>
                    <p className="modal-comments-item__date">{getDateByUnix(new Date(i.date))}</p>
                    <p className="modal-comments-item__content">{i.text}</p>
                </div>) : <p className="modal-comments-item__content">Комментарии отстствуют</p> : <p>Загрузка</p>}
            </div>
        </div>
    </Fragment>

    return modal ? createPortal(modalContent, document.body) : null;
};

export default Modal;