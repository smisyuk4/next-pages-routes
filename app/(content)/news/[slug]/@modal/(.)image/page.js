'use client';
import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';

export default function InterceptedImagePage({ params }) {
  const router = useRouter();
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className='modal-backdrop' onClick={router.back} />
      <dialog className='modal' open>
        <div className='fullscreen-image'>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            height={700}
            width={700}
          />
        </div>
      </dialog>
    </>
  );
}