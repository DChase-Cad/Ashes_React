
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import React, { Component, useState } from 'react';
import CardImg from 'reactstrap/lib/CardImg';

const items = [
    {
      index:0,
      src: 'assets/img/wrathion_dance.jpg',
      altText: 'Slide 1',
      caption: 'Dances with Dragons',
      header: 'Mythic Wrathion'
    },
    {
      index:1,
      src: 'assets/img/imperator_dead_achiev.jpg',
      altText: 'Slide 2',
      caption: 'Imperator kill seals up progression in Highmaul.',
      header: 'Heroic Imperator'
    },
    {
      index:2,
      src: 'assets/img/hero_denathrius.jpg',
      altText: 'Slide 3',
      caption: 'Denathrius Heroic down, on to mythic!',
      header: 'Heroic Denathrius'
    }
  ];


const HomeCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem className="w-100 rounded-0"
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img className="img-fluid" src={item.src} alt={item.altText} />
          <CarouselCaption className="blah" captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel className="w-100"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
  
  export default HomeCarousel;