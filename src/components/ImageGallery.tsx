'use client';
import React from 'react';
import { StaticImageData } from 'next/image';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import ImageSlide from './ImageSlide';
import 'yet-another-react-lightbox/styles.css';

const ImageGallery = ({ images }: { images: StaticImageData[] }) => {
  // code reference:
  // https://github.com/benhowell/react-grid-gallery/blob/master/examples/with-yet-another-react-lightbox/src/App.tsx
  const slides = images.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }));
  const [index, setIndex] = React.useState(-1);
  const handleClick = (index: number, item: StaticImageData) => setIndex(index);
  return (
    <div>
      <Gallery
        images={images}
        margin={10}
        rowHeight={360}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        render={{ slide: ImageSlide }}
      />
    </div>
  );
};
export default ImageGallery;
