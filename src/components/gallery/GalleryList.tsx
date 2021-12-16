import React, { FC, Fragment, useState } from 'react';
import GalleryItem from './GalleryItem';
import { IImages } from '../../types'
import Modal from './modal/Modal';
import { useModal } from '../../hooks/useModal';

interface GalleryListProps {
    images: IImages[],
}


const GalleryList: FC<GalleryListProps> = ({ images }: GalleryListProps) => {
    const { isShown, toggle } = useModal()
    const [content_id, setContent_id] = useState<number>()

    const openModal = (id: number) => {
        setContent_id(id)
        toggle()
    }

    return (
        <Fragment>
            <div className="gallery-wrapper">
                {images.map(item => <GalleryItem key={item.id} id={item.id} url={item.url} onClick={(id) => { openModal(id) }} />)}
            </div>
            {content_id ? <Modal isShown={isShown} hide={toggle} content_id={content_id} /> : null}
        </Fragment>
    );
};

export default GalleryList;