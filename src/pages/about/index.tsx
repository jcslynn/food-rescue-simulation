import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Typography from '@/components/Typography';
import Header from '@/components/Header';
import Button from '@/components/Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <Header>
        <Typography variant="h2">About the Food Allocation Algorithm</Typography>
        <Button icon={faArrowRight} onClick={() =>{}}>Text</Button>
      </Header>
    </Layout>
  );
}
