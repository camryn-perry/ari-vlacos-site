import React from 'react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];
const ImageGallery = ({ images }: { images: StaticImageData[] }) => {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
      {images.map((image, imageIndex) => (
        <li
          key={image.src}
          className={clsx(
            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
            // `relative aspect-[${image.width}/${image.height}] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800`,
            // rotations[imageIndex % rotations.length],
          )}>
          <a href={image.src}>
            <Image
              src={image}
              alt=''
              height={image.height / 2}
              width={image.width / 2}
              sizes='(min-width: 640px) 18rem, 11rem'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
