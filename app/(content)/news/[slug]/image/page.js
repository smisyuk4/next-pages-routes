import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/news';

export default async function ImagePage({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

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
