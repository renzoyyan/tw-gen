import { Plus, Trash } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';
import * as Form from '../form';
import { Button } from '../ui/button';
import { PickColor } from './pick-color';

export const ColorForm = () => {
  const { fields, append, remove } = useFieldArray({
    name: 'colors',
  });

  return (
    <div>
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
    </div>
  );
};
