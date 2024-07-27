import NewsList from '@/components/news-list/news-list';
import { getLatestNews } from '@/lib/news';

export default function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h1>Latest Page</h1>

      <NewsList news={latestNews} />
    </>
  );
}
