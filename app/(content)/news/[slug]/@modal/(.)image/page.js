import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getNewsItem } from '@/lib/news';
import ModalBackdrop from '@/components/modal-backdrop/modal-backdrop';

export default async function InterceptedImagePage({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />

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
