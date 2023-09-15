import { Plus, Trash } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';

import * as Form from '../form';
import { Button } from '../ui/button';

export const BoxShadow = () => {
  const { fields, append, remove } = useFieldArray({
    name: 'boxShadow',
  });
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-medium">Shadows</h3>
        <Button size={'icon'} onClick={() => append({ name: '', size: '' })}>
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {fields.map((_, idx) => (
        <div key={idx} className="flex items-end flex-wrap gap-x-4 mt-4">
          <div className="flex items-center gap-6 flex-1">
            <Form.Group className="w-full">
              <Form.Input name={`boxShadow.${idx}.name`} label="Name" />
            </Form.Group>
            <Form.Group className="w-full">
              <Form.Input name={`boxShadow.${idx}.size`} label="Size" />
            </Form.Group>
          </div>
          <Button
            variant={'destructive'}
            size={'icon'}
            className="mb-1"
            onClick={() => remove(idx)}
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};
