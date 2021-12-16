import { FC } from 'react';

interface ItemPros {
    id: number;
    url: string;
    onClick: (id: number) => void;
}

const GalleryItem: FC<ItemPros> = ({ id, url, onClick }: ItemPros) => {
    return (
        <div className="gallery-item__wrapper" data-id={id} onClick={() => onClick(id)}>
            <img src={url} alt="Изображение" className="galley-item__img" />
        </div>
    );
};

export default GalleryItem;