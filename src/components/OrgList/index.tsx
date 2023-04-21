import { useRouter } from 'next/router';
import useSWR from 'swr';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import Card from '../Card';
import OrgContent from './content';
import fetcher from '@/utils/fetcher';
import Skeleton from '../Skeleton';
import { Key } from 'react';

// const orgs = [
//   {
//     // travelTime: '20min',
//     size: '134 people',
//     foodAccess: 'Low (1)',
//     incomeLevel: '$23,000',
//     povertyRate: '15%',
//     lastDonation: '3 weeks',
//     donationType: 'Common',
//     name: 'Sunrise Austin',
//   },
//   {
//     // travelTime: '30min',
//     size: '53 people',
//     foodAccess: 'Normal (0)',
//     incomeLevel: '$31,000',
//     povertyRate: '11%',
//     lastDonation: '7 weeks',
//     donationType: 'Common',
//     name: 'Casa Travis',
//   },
//   {
//     // travelTime: '30min',
//     size: '18 people',
//     foodAccess: 'Extremely Low (2)',
//     incomeLevel: '$11,000',
//     povertyRate: '31%',
//     lastDonation: '1 week',
//     donationType: 'Uncommon',
//     name: 'Urban Roots ATX',
//   },
// ];

export default function OrgList() {
  const { push } = useRouter();
  return (
    <>
      <Organizations />
      <Button
        className="absolute bottom-0 right-20"
        onClick={() => push('/tryit/organizations')}
        icon={faArrowRight}
      >
        Next
      </Button>
    </>
  );
}

function Organizations() {
  const { data, error } = useSWR('/api/organizations', fetcher);
  if (error)
    return <div>Failed to load</div>
  if (!data) return <Skeleton />
  const orgs = [data[0],data[1], data[2]]
  console.log(data)
  return (
    <div className="flex flex-row mt-4 justify-between m-auto w-fit">
      {
        orgs.length !== 0 &&
        orgs.map((org: { [x: string]: any; name: any; id: any; }, index: Key | null | undefined) => {
          const { name, id, ...rest } = org;
          return (
            <Card key={index} header={name} className="m-4 pb-9">
              <OrgContent data={{ ...rest }} />
            </Card>
          );
        })}
    </div>
  );
}
