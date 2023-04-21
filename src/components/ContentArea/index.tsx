import { ReactNode } from 'react';

export default function ContentArea({ children }: { children: ReactNode }) {
    return (<div className='m-drawer flex-1 bg-background text-white p-[40px] min-h-screen h-full'>{children}</div>)
}
