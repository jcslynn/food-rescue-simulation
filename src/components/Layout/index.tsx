import { ReactNode } from 'react';
import Drawer from '../Drawer';
import ContentArea from '../ContentArea';
import Head from 'next/head';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Food Rescue Simulation</title>
      </Head>
      <main className="min-h-screen h-full w-full">
        <Drawer />
        <ContentArea>{children}</ContentArea>
      </main>
    </>
  );
}
