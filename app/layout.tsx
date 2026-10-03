import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Your First Keploy Test with Go, Echo & PostgreSQL',
  description: 'A beginner-friendly tutorial showing how to record API interactions, generate test cases, capture dependency mocks, and replay tests with Keploy.',
  openGraph: {
    title: 'Your First Keploy Test with Go, Echo & PostgreSQL',
    description: 'A beginner-friendly tutorial showing how to record API interactions, generate test cases, capture dependency mocks, and replay tests with Keploy.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-slate-100 font-sans">
        <Header githubUrl="https://github.com/yprat/keploy-go-quickstart-guide" />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
