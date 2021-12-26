
import { Fragment, useEffect, useState } from 'react';
import Header from './components/header';
import './styles/index.css';
import GalleryList from './components/gallery/GalleryList'
import { useTypeSelector } from './hooks/useTypeSelector';
import { useActions } from './hooks/useAction';


const App = () => {


  const { images, loading, error } = useTypeSelector(state => state.photos)
  const { fetchPhotos } = useActions()

  useEffect(() => {
    fetchPhotos()
    console.log(images, loading, error)
  }, [])


  if (error) {
    return <h1>{error}</h1>
  }

  if (loading) {
    return <h1>Loading Images</h1>
  }

  return (
    <Fragment>
      <Header />
      <GalleryList images={images} />
    </Fragment>
  );
};

export default App;