import Image from 'next/image';
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

export default function NewsDetailsPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  if(!newsItem){
    notFound()
  }

  return (
    <article className='news-article'>
      <header>
        <Image
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          height={300}
          width={300}
        />
        <h1>{newsItem.title}</h1>
        <date dateTime={newsItem.date}>{newsItem.date}</date>
      </header>

      <p>{newsItem.content}</p>
    </article>
  );
}
