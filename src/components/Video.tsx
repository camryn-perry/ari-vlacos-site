'use client';
import React from 'react';

export type VideoProps = {
  src: string;
  title?: string;
  role: string;
};
export function Video({ src, title, role }: VideoProps) {
  return (
    <div>
      <iframe className='w-full aspect-video' src={src} frameBorder={'0'} allowFullScreen />
      <p>{title}</p>
      <p>{role}</p>
    </div>
  );
}
