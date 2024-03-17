// container component to build out all videos

// import video definitions
import { Video } from '@/components/Video';
import { videos } from './staticVideoData';

export default function VideoContainer() {
  return (
    <>
      <ul
        role='list'
        className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2'>
        {videos.map((video, idx) => (
          <Video key={idx} {...video} />
        ))}
      </ul>
    </>
  );
}
