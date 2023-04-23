import Button from '@/components/Button';
import EditModel from '@/components/EditModel';
import IntroSprite from '@/components/IntroSprite';
import Layout from '@/components/Layout';
import Skeleton from '@/components/Skeleton';
import Typography from '@/components/Typography';
import fetcher from '@/utils/fetcher';
import { debounce } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

export default function EditPage() {
  const { query, push } = useRouter();
  const { id } = query;
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR('/api/model/' + id, fetcher);
  const [values, setValues] = useState({});
  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [data]);

  const handleChange =
    (field: string) => (event: Event, newValue: number | number[]) => {
      setValues({ ...values, [field]: newValue });
    };

  const handleClick = async () => {
    const data = await fetch(`/api/model/${id}`, {
      method: 'PUT',
      body: JSON.stringify(values),
    });
    mutate('/api/model/${id}', data, {
      populateCache(result, currentData) {
        if (result !== currentData) return result;
      },
    });
    push('/tryit/algo');
  };

  return (
    <Layout>
      <IntroSprite
        texts={[
          {
            text: (
              <div className="text-left">
                Move the sliders to adjust the scores for each feature
              </div>
            ),
            body: (
              <>
                <EditModel
                  data={values}
                  error={error}
                  onChange={handleChange}
                />
                <Button className="mt-8 flex" onClick={handleClick}>
                  Save Model
                </Button>
              </>
            ),
          },
        ]}
        top={50}
        showImage={false}
      />
    </Layout>
  );
}
