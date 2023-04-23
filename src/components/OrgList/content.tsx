import Typography from '../Typography';
import { startCase, toLower, indexOf } from 'lodash';

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-row justify-between">
      <Typography variant="bodyBold">{label}</Typography>
      <Typography variant="body2">{value}</Typography>
    </div>
  );
}
export default function OrgContent({ data }: any) {
  const labels = Object.keys(data);
  return (
    <div className="flex flex-col">
      {labels.map((label, index) => (
        <Item
          key={index}
          label={startCase(label) + ':'}
          value={getValue(data, label)}
        />
      ))}
    </div>
  );
}

function getValue(data: any, label: string) {
  let value = data[label];
  switch (label) {
    case 'travelTime':
      return value + ' min';
    case 'organizationSize':
      return value + ' people';
    case 'foodAccess':
    case 'donationType':
      return startCase(toLower(value));
    case 'incomeLevel':
      const string = `${value}`;
      return (
        '$' +
        string.substring(0, string.length - 3) +
        ',' +
        `${value}`.substring(string.length - 3)
      );
    case 'povertyRate':
      return value + '%';
    case 'lastDonation':
      if (value !== 'NEVER') {
        const i = indexOf(value, '_')
        value = value.substring(i) + ' ' + value.substring(0, i);
      }
      const last = startCase(toLower(value));
      return last;
  }
  return value;
}
