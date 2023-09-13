import { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputProps, Input as RadixInput } from '../ui/input';
import { Label } from '../ui/label';

type TExtendedInputProps = {
  label?: string;
  name: string;
} & InputProps;

export const Input = ({ label, name, ...props }: TExtendedInputProps) => {
  const randomId = useId();
  const { register } = useFormContext();

  //   const hasError = get(formState.errors, name);

  return (
    <>
      {label && <Label htmlFor={randomId}>{label}</Label>}

      <RadixInput
        {...register(name)}
        id={randomId}
        type={props.type || 'text'}
        min={props.type === 'number' ? 0 : undefined}
        {...props}
      />
    </>
  );
};
