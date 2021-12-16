
import { Fragment, useEffect, useState } from 'react';
import Header from './components/header';
import './styles/index.css';
import GalleryList from './components/gallery/GalleryList'
import { IImages } from './types'
import axios from 'axios';


const App = () => {

  const [images, setImages] = useState<IImages[]>([])
 


  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    try {
      const { data } = await axios.get<IImages[]>('https://boiling-refuge-66454.herokuapp.com/images')
      setImages(data)
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <Fragment>
      <Header />
      <GalleryList images={images} />
    </Fragment>
  );
};

export default App;