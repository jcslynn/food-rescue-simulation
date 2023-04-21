import IntroSprite, { Sprite } from '@/components/IntroSprite';
import Layout from '@/components/Layout';
import ResultsPanel from '@/components/ResultsPanel';

const allocate: Sprite[] = [
  { text: 'Based on the way you scored your model' },
  
  {
    text: (
      <div className="text-left">
        The algorithm
        <span className="text-highlight"> allocated the donation </span>to:
      </div>
    ),
    body: <ResultsPanel />
  },
];
export default function ResultsPage() {
  return (
    <Layout>
      <IntroSprite texts={allocate} showImage={false} />
    </Layout>
  );
}
