// import Image from 'next/image';
// import Header from '@/components/Header';
import IntroSprite, { Sprite } from '@/components/IntroSprite';
import Layout from '@/components/Layout';
import OrgList from '@/components/OrgList';
const intro: Sprite[] = [
  {
    text: (
      <>
        {'Imagine that you '}
        <span className="text-highlight">
          work at a food rescue organization
        </span>
      </>
    ),
  },
  {
    text: (
      <>
        {'Your job is to '}
        <span className="text-highlight">allocate incoming food donations</span>
        {' to community organizations in Austin that serve local food needs'}
      </>
    ),
  },
  {
    text: (
      <>
        {'Here are some examples of what '}
        <span className="text-highlight">recipient organizations</span>
        {' look like:'}
      </>
    ),
    body: <OrgList />,
  },
];

export default function TryitPage() {
  return (
    <Layout>
      {/* <Header>
        <Typography variant="h2">Try It Out</Typography>
      </Header> */}
      <IntroSprite texts={intro} />
    </Layout>
  );
}
