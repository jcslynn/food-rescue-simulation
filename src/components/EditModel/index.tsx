import Skeleton from '@/components/Skeleton';
import Typography from '@/components/Typography';
import AdjustableField from './adjustableField';
import { startCase } from 'lodash';

export default function EditModel({
  data,
  error,
  onChange,
}: {
  data: any;
  error: any;
  onChange: Function;
}) {
  if (error) return <div>Failed to Load</div>;
  if (!data)
    return (
      <div>
        <Skeleton />
      </div>
    );

  const { id, chosen, ...rest } = data;
  const fields = Object.keys(rest);

  return (
    <div
      className={`rounded-[10px] p-8 pt-6 bg-primary
      w-[800px] text-left mt-14`}
    >
      <div className="flex flex-row justify-between items-center mb-8">
        <Typography
          color="text-highlight"
          variant="h3"
        >{`Model ${id}`}</Typography>
      </div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-8 m-8">
        {fields.map((field, index) => (
          <AdjustableField
            key={index}
            label={startCase(field)}
            field={field}
            value={Number(rest[field])}
            handleChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}
