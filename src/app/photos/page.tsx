import { type Metadata } from 'next';
import { SimpleLayout } from '@/components/SimpleLayout';
import ImageGallery from '@/components/ImageGallery';
import { photos } from '../imageExports';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Things I’ve made trying to put my dent in the universe.',
};

export default function Photos() {
  return (
    <SimpleLayout
      title='Photos'
      intro="">
          <ImageGallery images={photos}/>
    </SimpleLayout>
  );
}
