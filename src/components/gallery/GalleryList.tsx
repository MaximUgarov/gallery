import React, { FC, Fragment } from 'react';
import GalleryItem from './GalleryItem';
import { IImages } from '../../types'
import Modal from './modal/Modal';
import { useActions } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';

interface GalleryListProps {
    images: IImages[],
}


const GalleryList: FC<GalleryListProps> = ({ images }: GalleryListProps) => {
    const { modal } = useTypeSelector(state => state.modal)
    const { ToggleModal } = useActions()



    const openModal = (id: number) => {
        ToggleModal(id, modal)
    }


    return (
        <Fragment>
            <div className="gallery-wrapper">
                {images.map(item => <GalleryItem key={item.id} id={item.id} url={item.url} onClick={(id) => { openModal(id) }} />)}
            </div>
            <Modal hide={() => ToggleModal(0, modal)} />
        </Fragment>
    );
};

export default GalleryList;