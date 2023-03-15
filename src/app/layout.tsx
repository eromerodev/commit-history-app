import PageLayout from '@/shared/PageLayout';
import '../styles/globals.css';

export const metadata = {
  title: 'Git Commits',
  description: 'List of all commits in the repository',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
