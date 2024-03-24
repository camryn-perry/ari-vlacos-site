import { type Metadata } from 'next';
import { SimpleLayout } from '@/components/SimpleLayout';
import ImageGallery from '@/components/ImageGallery';
import { prints } from '../imageExports';

export const metadata: Metadata = {
  title: 'Prints',
  description: '',
};

export default function Prints() {
  return (
    <SimpleLayout title='Prints' intro=''>
      <ImageGallery images={prints} />
    </SimpleLayout>
  );
}
