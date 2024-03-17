import { type Metadata } from 'next';
import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import '@/app/flash/page.css';
import { SimpleLayout } from '@/components/SimpleLayout';
// import flash1 from '@/images/photos/flash/flash-1.jpeg';
// import flash2 from '@/images/photos/flash/flash-2.jpeg';
// import flash3 from '@/images/photos/flash/flash-3.jpeg';
// import flash4 from '@/images/photos/flash/flash-4.jpeg';
// import flash5 from '@/images/photos/flash/flash-5.jpeg';
// import flash6 from '@/images/photos/flash/flash-6.jpeg';
// import flash7 from '@/images/photos/flash/flash-7.jpeg';
// import flash8 from '@/images/photos/flash/flash-8.jpeg';
// import flash9 from '@/images/photos/flash/flash-9.jpeg';
// import flash10 from '@/images/photos/flash/flash-10.jpeg';
// import flash11 from '@/images/photos/flash/flash-11.jpeg';
// import flash12 from '@/images/photos/flash/flash-12.jpeg';
// import flash13 from '@/images/photos/flash/flash-13.jpeg';
// import flash14 from '@/images/photos/flash/flash-14.jpeg';
// import flash15 from '@/images/photos/flash/flash-15.jpeg';
// import flash16 from '@/images/photos/flash/flash-16.jpeg';
// import flash17 from '@/images/photos/flash/flash-17.jpeg';
// import flash18 from '@/images/photos/flash/flash-18.jpeg';
// import flash19 from '@/images/photos/flash/flash-19.jpeg';
// import flash20 from '@/images/photos/flash/flash-20.jpeg';

const photos = [];

export const metadata: Metadata = {
  title: 'Flash',
  description:
    'flash are pre-made images, ready to be selected and tattooed. Ari only tattoos each flash design once to insure a unique tattoo for each client.',
};
const intro = (
  <>
    Designs are not repeatable and likely have shading. <br />
    <br />
    <Link
      href='https://form.jotform.com/233390471653154'
      target='_blank'
      rel='noopener noreferrer'>
      Submit flash ideas here
      <br />
    </Link>
    <br />
    Follow{' '}
    <Link
      href='https://www.instagram.com/justokayflash/'
      target='_blank'
      rel='noopener noreferrer'>
      @justokayflash
    </Link>{' '}
    for new designs.
  </>
);
export default function Flash() {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  return (
    <div className='flash-work'>
      <SimpleLayout title='Flash work' intro={intro}>
        <ul
          role='list'
          className='\ grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
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
    </div>
  );
}
