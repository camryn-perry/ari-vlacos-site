import { type Metadata } from 'next';
import { SimpleLayout } from '@/components/SimpleLayout';
import ImageGallery from '@/components/ImageGallery';
import { paint } from '../imageExports';

export const metadata: Metadata = {
  title: 'Paintings',
  description: '',
};

export default function Paintings() {
  return (
    <SimpleLayout
      title='Paintings'
      intro=''>
          <ImageGallery images={paint}/>
    </SimpleLayout>
  );
}
