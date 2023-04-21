import Typography from '../Typography';
import { startCase, toLower, indexOf } from 'lodash';

function Item({
  label,
  value,
  selected,
}: {
  label: string;
  value: string;
  selected: boolean;
}) {
  return (
    <div className="flex flex-row justify-between">
      <Typography
        variant="bodyBold"
        color={selected ? 'text-primary' : undefined}
      >
        {label}
      </Typography>
      <Typography variant="body2" color={selected ? 'text-primary' : undefined}>
        {value}
      </Typography>
    </div>
  );
}
export default function ModelContent({
  data,
  selected,
}: {
  data: any;
  selected: boolean;
}) {
  const labels = Object.keys(data);
  return (
    <div className="flex flex-col mt-4">
      {labels.map((label, index) => (
        <Item
          selected={selected}
          key={index}
          label={startCase(label) + ':'}
          value={data[label] + ' pt'}
        />
      ))}
    </div>
  );
}
