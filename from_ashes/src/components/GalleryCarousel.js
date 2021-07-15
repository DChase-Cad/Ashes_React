
import React, { Component } from 'react'
import Carousel from 'react-gallery-carousel';
import GALLERY from '../shared/GalleryItems';
import ImageGallery from 'react-image-gallery';


export default class GalleryCarousel extends Component {
    render() {

        const images = [9, 8, 7, 6, 5].map((number) => ({
            src: `https://placedog.net/${number}00/${number}00?id=${number}`
          }));
        
          return (
            <ImageGallery items={GALLERY} />
          );
        
    }
}

