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
      <iframe src={src} frameBorder={'0'} allowFullScreen />
      <p>{title}</p>
      <p>{role}</p>
    </div>
  );
}
