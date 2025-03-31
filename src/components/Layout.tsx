import { ReactNode } from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title = 'Dashboard' }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Dashboard application" />
      </Head>
      
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}