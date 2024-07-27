import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function ImagePage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className='fullscreen-image'>
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        height={800}
        width={800}
      />
    </div>
  );
}
