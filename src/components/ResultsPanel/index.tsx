import { faArrowRight, faRotateBack } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useSWRImmutable from 'swr/immutable'
import OrgContent from '../OrgList/content';
import Card from '../Card';
import fetcher from '@/utils/fetcher';
import Skeleton from '../Skeleton';

const Wrapper = styled.div`
  border-radius: 10px;
  padding: 2rem;
  padding-top: 1.5rem;
  background: #230640;
  width: fit-content;
  text-align: left;
  margin: 4rem;
  display: flex;
  flex-direction: column;
`;

export default function ResultsPanel() {
  const { push } = useRouter();
  const { data, error } = useSWRImmutable('/api/allocation', fetcher);
  if (error) return <div>Failed to Load</div>;
  if (!data)
    return (
      <div>
        <Skeleton />
      </div>
    );
  const { id, name, score, ...rest } = data;
  return (
    <div>
      <div className="flex flex-row">
        <Card header={name} className="m-auto mt-20 pl-10 pr-10 pb-9 w-[400px]">
          <OrgContent data={{ ...rest }} />
        </Card>
        <Card header="Why?" className="m-auto mt-20 pl-10 pr-10 pb-9 w-[400px]">
          {/* <OrgContent data={{ ...rest }} /> */}
          {`The Borda score for ${name} was the highest at ${score}`}
        </Card>
      </div>
      <div className="absolute bottom-0 right-20 mt-10">
        <Button
          icon={faRotateBack}
          className="mr-5"
          onClick={() => push('/tryit')}
        >
          Try Again
        </Button>
        <Button
          icon={faArrowRight}
          onClick={() => push('/tryit/organizations')}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
