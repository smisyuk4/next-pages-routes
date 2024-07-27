import Link from 'next/link';
import NewsList from '@/components/news-list/news-list';
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  console.log(filter);
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header id='archive-header'>
        <nav>
          <ul>
            {links.map((link, idx) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={idx}>
                  <Link href={href} aria-label=''>
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {newsContent}
    </>
  );
}
