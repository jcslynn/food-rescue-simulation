import AlgoPanel from '@/components/AlgoPanel';
import Header from '@/components/Header';
import IntroSprite, { Sprite } from '@/components/IntroSprite';
import Layout from '@/components/Layout';
import Typography from '@/components/Typography';

const algo: Sprite[] = [
  {
    text: (
      <div className="text-left leading-tight">
        {"Now, let's tune the algorithm based on "}
        <span className="text-highlight"> your </span>
        preferences
      </div>
    ),
    body: <AlgoPanel />
  },
];
export default function TryitAlgoPage() {
  return (
    <Layout>
      {/* <div className='mt-[90px] ml-48 mr-48 align-left w-0.75'>
        <Typography variant="h1" component="span">
            
        </Typography>
      </div> */}
      <IntroSprite texts={algo} showImage={false} />
    </Layout>
  );
}
