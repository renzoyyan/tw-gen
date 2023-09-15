import { Plus, Trash } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { ACTIONS } from '@/lib/utils';
import { useStepperStore } from '@/store/stepper';
import { Action, FormPayload } from '@/types';
import * as Form from '../form';
import { Button } from '../ui/button';
import { Header } from '../ui/header';

export const FontSizeForm = () => {
  const { handleSubmit } = useFormContext<FormPayload['fontSize']>();
  const { fields, append, remove } = useFieldArray({
    name: 'fontSize',
  });

  const { handleNextStep, handlePrevStep } = useStepperStore(state => state);

  const handleSubmitTypography = (payload: FormPayload['fontSize'], action: Action) => {
    if (action === ACTIONS.Prev) return handlePrevStep(payload);

    handleNextStep(payload);
  };

  return (
    <div>
      <Header title="Typography" subTitle="Add you custom font size with ease ✨" />

      <div className="flex items-center justify-between my-6">
        <h3 className="text-xl font-medium">Font size</h3>
        <Button
          size={'icon'}
          onClick={() =>
            append({ name: '', size: '', lineHeight: '', letterSpacing: '', fontWeight: '' })
          }
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {fields.map((_, idx) => (
        <div key={idx} className="flex items-end flex-wrap gap-x-4 mt-4">
          <div className="grid sm:grid-cols-3 gap-6 items-end">
            <Form.Group className="w-full">
              <Form.Input name={`fontSize.${idx}.name`} label="Name" placeholder="5xl" />
            </Form.Group>
            <Form.Group className="w-full">
              <Form.Input name={`fontSize.${idx}.size`} label="Size" placeholder="8rem" />
            </Form.Group>
            <Form.Group className="w-full">
              <Form.Input
                name={`fontSize.${idx}.lineHeight`}
                label="Line height (optional)"
                placeholder="1rem"
              />
            </Form.Group>

            <Form.Group className="w-full">
              <Form.Input
                name={`fontSize.${idx}.letterSpacing`}
                label="Letter spacing (optional)"
                placeholder="4px"
              />
            </Form.Group>
            <Form.Group className="w-full">
              <Form.Input
                name={`fontSize.${idx}.fontWeight`}
                label="Font weight (optional)"
                placeholder="500"
              />
            </Form.Group>

            <Button
              variant={'destructive'}
              size={'icon'}
              className="mb-1"
              onClick={() => remove(idx)}
            >
              <Trash className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-between my-10">
        <Button
          type="submit"
          variant={'outline'}
          onClick={handleSubmit(payload => handleSubmitTypography(payload, ACTIONS.Prev))}
        >
          Back
        </Button>
        <Button
          type="submit"
          onClick={handleSubmit(payload => handleSubmitTypography(payload, ACTIONS.Next))}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
