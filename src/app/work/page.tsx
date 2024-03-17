import { type Metadata } from 'next';
import Image from 'next/image';
import clsx from 'clsx';

import { SimpleLayout } from '@/components/SimpleLayout';

// import baphomet from '@/images/photos/work/baphomet.jpg';
// import bowieKnife from '@/images/photos/work/bowie-knife.jpg';
// import clownDoll from '@/images/photos/work/clown-doll.jpg';
// import coyote from '@/images/photos/work/coyote.jpg';
// import divingHorse from '@/images/photos/work/diving-horse.jpg';
// import humanSkull from '@/images/photos/work/early-human-skull.jpg';
// import emptyBed from '@/images/photos/work/empty-bed.jpg';
// import foundChair from '@/images/photos/work/found-chair.jpg';
// import inFrogress from '@/images/photos/work/in-frogress.jpg';
// import resignedClown from '@/images/photos/work/resigned-clown.jpg';
// import seaDragon from '@/images/photos/work/sea-dragon.jpg';
// import stippledCars from '@/images/photos/work/stippled-cars.jpg';
// import theLovers from '@/images/photos/work/the-lovers-II.jpg';
// import wateringHole from '@/images/photos/work/watering-hole.jpg';

const photos = [];

export const metadata: Metadata = {
  title: 'Work',
  description: 'Things I’ve made trying to put my dent in the universe.',
};

export default function Work() {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  return (
    <SimpleLayout
      title='Fineline contemporary black and grey'
      intro="Samples of Ari's work.">
      <ul
        role='list'
        className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
        {photos.map((image, imageIndex) => (
          <li
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}>
            <a href={image.src}>
              <Image
                src={image}
                alt=''
                sizes='(min-width: 640px) 18rem, 11rem'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </a>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  );
}
