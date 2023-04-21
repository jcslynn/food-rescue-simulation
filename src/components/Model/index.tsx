import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import Skeleton from '../Skeleton';
import Typography from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ModelContent from './content';

type ModelProps = {
  id: number;
  selected: boolean;
  onClick: Function;
};

const Wrapper = styled.div<{ selected?: boolean }>`
  border-radius: 10px;
  padding: 2rem;
  padding-top: 1.5rem;
  background: ${props => (props.selected ? 'white' : '#230640')};
  color: ${props => (props.selected ? '#230640' : 'white')};
  min-width: 300px;
  text-align: left;
  cursor: pointer;
  margin: 0 4rem;
`;

export default function Model({ id, selected, onClick }: ModelProps) {
  const { data, error } = useSWR(`/api/model/${id}`, fetcher);
  const { push } = useRouter();

  if (error) return <Wrapper>Failed to Load</Wrapper>;
  if (!data)
    return (
      <Wrapper>
        <Skeleton />
      </Wrapper>
    );

  const handleClick = () => {
    onClick(id);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    push('/tryit/algo/edit/' + id);
  };
  const { id: i, chosen, ...rest } = data;
  return (
    <Wrapper selected={selected} onClick={handleClick}>
      <div className="flex flex-row justify-between items-center">
        <Typography
          color="text-highlight"
          variant="h3"
        >{`Model ${id}`}</Typography>
        <FontAwesomeIcon
          className="hover:opacity-75"
          icon={faEdit}
          color={selected ? 'grey' : 'white'}
          onClick={handleEdit}
        />
      </div>
      <ModelContent data={rest} selected={selected} />
    </Wrapper>
  );
}
