import Typography from '../Typography';
import Model from '../Model';
import { useState } from 'react';
import Button from '../Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

export default function AlgoPanel() {
  const [selected, select] = useState();
  const { push } = useRouter();

  const handleClick = async () => {
    const data = await fetch(`/api/model/choose/${selected}`, {
      method: 'PUT',
    });
    console.log(data)
    push('/tryit/allocate')
  }
  return (
    <div>
      <div className="text-left opacity-50 mt-6">
        <Typography>{"Let's start with some preset models"}</Typography>
      </div>
      <div className="flex flex-row justify-start mt-20">
        <Model id={1} selected={selected === 1} onClick={select} />
        <Model id={2} selected={selected === 2} onClick={select} />
      </div>
      <div className="text-right mt-10">
        <Button icon={faArrowRight} onClick={handleClick}>Choose This Model</Button>
      </div>
    </div>
  );
}
