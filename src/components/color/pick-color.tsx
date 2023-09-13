import { useWatch } from 'react-hook-form';

type ColorProps = {
  // color: string;
  name: string;
};

export const PickColor = ({ name }: ColorProps) => {
  const hex_code = useWatch({ name });

  const getColor = (color: string) => {
    if (!color) return '#000';
    if (color[0] === '#') return color;

    const convertedColor = '#' + color;
    return convertedColor.trim();
  };

  return (
    <div
      className="w-11 h-11 rounded-md shadow-md"
      style={{ backgroundColor: `${getColor(hex_code)}` }}
    />
  );
};
