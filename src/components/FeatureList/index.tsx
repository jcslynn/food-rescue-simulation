import { faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card';
import Button from '../Button';
import { useRouter } from 'next/router';
import { ceil } from 'lodash';

type FeatureType = {
  name: string;
  description: string;
};
const features: FeatureType[] = [
  {
    name: 'Travel Time',
    description:
      'The expected travel time between a donor and a recipient organization. Indicates time that volunteers would need to spend to complete a rescue. (0-60+ minutes)',
  },
  {
    name: 'Recipient Size',
    description:
      'The number of clients that a recipient organization serves every month. (0-1000 people; AVG: 350)',
  },
  {
    name: 'Food Access',
    description:
      'USDA-defined food access level in the client neighborhood that a recipient organization serves. Indicates clients’ access to fresh and healthy food. (Normal (0), Low (1), Extremely low(2))',
  },
  {
    name: 'Income Level',
    description:
      'The median household income of the client neighborhood that a recipient organization serves (0-100K+, Median=$41,283) [77]. Indicates access to social and institutional resources.',
  },
  {
    name: 'Poverty Rate',
    description:
      'Percentage of people living under the US Federal poverty threshold in the client neighborhood that a recipient organization serves. (0-60 %; AVG=23%)',
  },
  {
    name: 'Last Donation',
    description:
      'The number of weeks since the organization last received a donation from 412 Food Rescue. (1 week–12 weeks, never)',
  },
  {
    name: 'Total Donations',
    description:
      'The number of donations that an organization has received from 412 Food Rescue in the last three months. (0-12 donations) A unit of donation is a carload of food (60 meals).',
  },
  {
    name: 'Donation Type',
    description:
      'Donation types were common or uncommon. Common donations are bread or produce and account for 70% of donations. Uncommon donations include meat, dairy, prepared foods, etc.',
  },
];

export default function FeatureList() {
  const { push } = useRouter();
  return (
    <>
      <FeatureGrid />
      <Button
        className="absolute top-0 right-20"
        onClick={() => push('/tryit/algo')}
        icon={faArrowRight}
      >
        Next
      </Button>
    </>
  );
}

function FeatureGrid() {
  const rows = ceil(features.length / 3);
  const col1 = features.slice(0, rows);
  const col2 = features.slice(rows, rows * 2);
  const col3 = features.slice(rows * 2);

  return (
    <div className="flex flex-row justify-center mt-4 items-start m-auto w-[calc(100%-140px)] absolute">
      <div className="col1 flex flex-col m-3">
        {col1.map(({ name, description }: FeatureType, index) => (
          <Card
            key={index}
            header={name}
            headerIcon={faInfoCircle}
            className="w-[300px] m-2"
            minimized
          >
            <div className="opacity-60">{description}</div>
          </Card>
        ))}
      </div>
      <div className="col2 flex flex-col m-3">
        {col2.map(({ name, description }: FeatureType, index) => (
          <Card
            key={index}
            header={name}
            headerIcon={faInfoCircle}
            className="w-[300px] m-2"
            minimized
          >
            <div className="opacity-60">{description}</div>
          </Card>
        ))}
      </div>
      <div className="col3 flex flex-col m-3">
        {col3.map(({ name, description }: FeatureType, index) => (
          <Card
            key={index}
            header={name}
            headerIcon={faInfoCircle}
            className="w-[300px] m-2"
            minimized
          >
            <div className="opacity-60">{description}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
