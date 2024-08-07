import { Inter, Merriweather } from 'next/font/google';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });
const merriweather = Merriweather({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
