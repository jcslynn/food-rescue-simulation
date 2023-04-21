import FeatureList from '@/components/FeatureList';
import IntroSprite, { Sprite } from '@/components/IntroSprite';
import Layout from '@/components/Layout';

const algoSteps: Sprite[] = [
    {
        text: "Choosing the right organization can be a daunting task, so we've created an AI algorithm to assist you",
      },
      {
        text: 'The algorithm ranks each organization based on how much you value each of the following features:',
        body: <FeatureList />,
      },
]
export default function TryitOrganizationsPage() {
  return (
    <Layout>
      <IntroSprite top={30} texts={algoSteps} showImage={false}/>
    </Layout>
  );
}
