import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getNewsItem } from '@/lib/news';

export default async function NewsDetailsPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className='news-article'>
      <header>
        <Link href={`/news/${newsItem.slug}/image`} aria-label={newsItem.title}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            height={300}
            width={300}
            priority
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>

      <p>{newsItem.content}</p>
    </article>
  );
}
