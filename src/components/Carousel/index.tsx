import React, { useState, useEffect, useCallback } from 'react';
import { PrevButton, NextButton } from './EmblaCarouselButtons';
import { mediaByIndex } from './media';
import './embla.css';
import useEmblaCarousel from 'embla-carousel-react';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   width: 100%;
//   height: 500px;
//   background-color: #f2f2f2;
//   position: relative;
//   z-index: -1;
// `;

export default function Carousel() {
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const [viewportRef, embla] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    embla.on('reInit', onSelect);
    onSelect();
  }, [embla, onSelect]);

  // if (true) {
  //   return <Wrapper />;
  // }

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={viewportRef}>
        <div className='embla__container'>
          {slides.map((index) => (
            <div className='embla__slide' key={index}>
              <img
                className='embla__slide__img'
                src={mediaByIndex(index)}
                alt='A cool cat.'
              />
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
}
