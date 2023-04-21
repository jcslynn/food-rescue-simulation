import { Slider } from '@mui/material';
import Typography from '../Typography';

export default function AdjustableField({
  label,
  value,
  handleChange,
  field,
}: {
  label: string;
  value: number;
  handleChange: Function;
  field: string;
}) {
  return (
    <div className="">
      <Typography variant="subtitle">{label}</Typography>
      <Slider
        sx={{ color: '#A955FF', marginTop: 2 }}
        valueLabelDisplay="auto"
        min={0}
        max={30}
        value={value}
        onChange={handleChange(field)}
      />
    </div>
  );
}
