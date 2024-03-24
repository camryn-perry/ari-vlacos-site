import { type Metadata } from 'next';
import Image from 'next/image';
import clsx from 'clsx';
import React, { useState, useEffect } from "react";
import { SimpleLayout } from '@/components/SimpleLayout';
import ImageGallery from '@/components/ImageGallery';
import { photos } from '../imageExports';

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

export const metadata: Metadata = {
  title: 'Work',
  description: 'Things I’ve made trying to put my dent in the universe.',
};

export default function Work() {
  return (
    <SimpleLayout
      title='Photos'
      intro="">
          <ImageGallery images={photos}/>
    </SimpleLayout>
  );
}
