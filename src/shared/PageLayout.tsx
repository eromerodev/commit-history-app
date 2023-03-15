'use client';

import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <div className="relative flex min-h-full flex-col">
        <Header />
        <main>
          <div className="mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
