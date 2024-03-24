import { type Metadata } from 'next';
import Image from 'next/image';

import { Container } from '@/components/Container';

import portraitImage from '@/public/ari_about_page.jpg';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Ari Vlacos',
};

export default function About() {
  return (
    <Container className='mt-16 sm:mt-32'>
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
        <div className='lg:pl-20'>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
            <Image
              src={portraitImage}
              alt=''
              sizes='(min-width: 1024px) 32rem, 20rem'
              className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>
            About Me
          </h1>
          <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
            <p>
              I am a video producer specializing in crafting unique videos for
              both tech companies and the general public. My main focus is
              creating captivating stories through visual storytelling and
              ensuring a smooth experience for my clients
            </p>
            <br></br>
            <br></br>I am a Visual Artist based in Oakland, California.
            <br></br>I produce video interviews, podcasts, live streams, remote
            recordings, event coverage, testimonials, photography and more!
            <h3>Curriculum Vitae&nbsp;</h3>
            <p>
              2009 California Arts Scholar
              <br></br>
              2015 UCLA graduate, BA Art
              <br></br>
              2015-2023 Video Production
            </p>
            <h3>Technical Experience</h3>
            <p>
              Video Production, Videography and Camera Operation, Lighting and
              Rigging, Live Stream Events, Audio Recording{' '}
            </p>
            <p>Applications: Adobe Creative Suite, Final Cut Pro</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
