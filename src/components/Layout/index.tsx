import { ReactNode } from 'react';
import Drawer from '../Drawer';
import ContentArea from '../ContentArea';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen h-full w-full">
      <Drawer />
      <ContentArea>{children}</ContentArea>
    </main>
  );
}
