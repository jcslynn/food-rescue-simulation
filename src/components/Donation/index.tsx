import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Typography from '../Typography';

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

export default function Donation() {
  const { push } = useRouter();
  return (
    <div>
      <Wrapper>
        <Typography variant="h2">
          {'Wheatsville Food Co-op - Wheatsville North'}
        </Typography>
        <div className="mt-10 flex flex-col">
          <div className="flex justify-between">
            <Typography variant="body1" className="font-semibold">
              Location:
            </Typography>
            <Typography variant="body1" className="underline">
              <a
                target="_blank"
                href="https://www.google.com/maps/place/3101+Guadalupe+St,+Austin,+TX+78705/@30.2975692,-97.7436561,17z/data=!3m1!4b1!4m6!3m5!1s0x8644b580183bb4ed:0xd960ff235d44e9b4!8m2!3d30.2975692!4d-97.7410812!16s%2Fg%2F11b8v52f8c"
              >
                3101 Guadalupe St, Austin, TX 78705
              </a>
            </Typography>
          </div>
          <div className="flex justify-between">
            <Typography variant="body1" className="font-semibold">
              Donation:
            </Typography>
            <Typography variant="body1">Prepared Food (Common)</Typography>
          </div>
        </div>
      </Wrapper>
      <div className="text-right mt-10">
        <Button icon={faArrowRight} onClick={() => push('/tryit/results')}>
          Allocate
        </Button>
      </div>
    </div>
  );
}
