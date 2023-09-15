import { useFormContext } from 'react-hook-form';

import { ACTIONS } from '@/lib/utils';
import { useStepperStore } from '@/store/stepper';
import { Action, FormPayload } from '@/types';
import { BorderRadiusForm, BoxShadow } from '.';
import { Button } from '../ui/button';
import { Header } from '../ui/header';

const EffectsForm = () => {
  const { handleSubmit } = useFormContext<Pick<FormPayload, 'borderRadius' | 'boxShadow'>>();

  const { handleNextStep, handlePrevStep } = useStepperStore(state => state);

  const handleSubmitEffects = (
    payload: Pick<FormPayload, 'borderRadius' | 'boxShadow'>,
    action: Action
  ) => {
    if (action === ACTIONS.Prev) return handlePrevStep(payload);

    handleNextStep(payload);
  };

  return (
    <>
      <Header title="Effects" subTitle="Add your custom border radius and shadows 🚀" />
      <div className="my-6 space-y-16">
        <BorderRadiusForm />
        <BoxShadow />
      </div>
      <div className="flex items-center justify-between mt-16 mb-10">
        <Button
          type="submit"
          variant={'outline'}
          onClick={handleSubmit(payload => handleSubmitEffects(payload, ACTIONS.Prev))}
        >
          Back
        </Button>
        <Button
          type="submit"
          onClick={handleSubmit(payload => handleSubmitEffects(payload, ACTIONS.Next))}
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default EffectsForm;
