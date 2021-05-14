import { Carousel,CarouselItem, CarouselCaption } from 'reactstrap';
import React, { Component } from 'react';
import {HOMECAROUSELIMAGES} from '../shared/HomeCarouselItems'

class HomeCarousel extends Component {
    render() {
        return (
            <img src={HOMECAROUSELIMAGES[0].src} alt={HOMECAROUSELIMAGES[0].altText} />
        );
    }
}

export default HomeCarousel;