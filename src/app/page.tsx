import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export default async function Home() {
  return (
    <>
      <Container className='mt-9'>
        <div className='max-w-5xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-7xl dark:text-zinc-100'>
            ARISTOTLE VLACOS
          </h1>
          <div className='mx-auto max-w-xl lg:max-w-none'>
            <div className='mt-6 flex text-base text-zinc-600 dark:text-zinc-400'>
              Video Production Specialist
            </div>
          </div>
        </div>
      </Container>
      {/* TODO add videos here */}
    </>
  );
}
