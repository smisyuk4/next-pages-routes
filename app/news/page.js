import Link from 'next/link';

import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';

export default function NewsPage() {
  return (
    <div>
      <h1>News page</h1>

      <ul className='news-list'>
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <Image
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
                height={300}
                width={300}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
