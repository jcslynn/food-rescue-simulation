import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Typography from '@/components/Typography';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <Header border>
        <Typography variant="h2">Dashboard</Typography>
      </Header>
    </Layout>
  );
}
