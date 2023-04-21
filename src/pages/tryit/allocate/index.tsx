import AlgoPanel from '@/components/AlgoPanel';
import Donation from '@/components/Donation';
import Header from '@/components/Header';
import IntroSprite, { Sprite } from '@/components/IntroSprite';
import Layout from '@/components/Layout';
import Typography from '@/components/Typography';

const allocate: Sprite[] = [
  { text: 'Now that you have chosen your model' },
  {
    text: (
      <div>
        It is time to start
        <span className="text-highlight"> allocating donations</span>!
      </div>
    ),
  },

  {
    text: (
      <div className="text-left">
        You receive the following 
        <span className="text-highlight"> donation</span>:
      </div>
    ),
    body: <Donation />
  },
];
export default function AllocatePage() {
  return (
    <Layout>
      <IntroSprite texts={allocate} showImage={false} />
    </Layout>
  );
}
