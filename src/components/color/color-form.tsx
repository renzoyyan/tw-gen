import { useStepperStore } from '@/store/stepper';
import { FormPayload } from '@/types';
import { Plus, Trash } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import * as Form from '../form';
import { Button } from '../ui/button';
import { Header } from '../ui/header';
import { PickColor } from './pick-color';

export const ColorForm = () => {
  const { handleSubmit } = useFormContext<FormPayload['colors']>();
  const { fields, append, remove } = useFieldArray({
    name: 'colors',
  });

  const handleNextStep = useStepperStore(state => state.handleNextStep);

  const handleSubmitColors = (payload: FormPayload['colors']) => {
    handleNextStep(payload);
  };

  return (
    <div>
      <Header title="Color" subTitle="Enter and choose the colors you want to use" />

      <p className="stepper__text">
        If you want to group codes, prefix them with the same name (only the last two parts will be
        used). You can group the colors after <strong>Effects step</strong>. Lezgo! 🚀
      </p>

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-medium">Add new color</h3>
        <Button size={'icon'} onClick={() => append({ name: '', hex_code: '' })}>
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {fields.map((_, idx) => (
        <div key={idx} className="flex items-end flex-wrap gap-x-4 mt-4">
          <PickColor name={`colors.${idx}.hex_code`} />
          <div className="flex items-center gap-x-4 flex-1">
            <Form.Group className="w-full">
              <Form.Input name={`colors.${idx}.name`} label="Name" />
            </Form.Group>
            <Form.Group className="w-full">
              <Form.Input name={`colors.${idx}.hex_code`} label="Hex code" />
            </Form.Group>
          </div>

          <Button variant={'destructive'} size={'icon'} onClick={() => remove(idx)}>
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      ))}

      <div className="text-right my-10">
        <Button type="submit" onClick={handleSubmit(handleSubmitColors)}>
          Next
        </Button>
      </div>
    </div>
  );
};
