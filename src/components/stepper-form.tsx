import { FormProvider, useForm } from 'react-hook-form';

import { useStepperStore } from '@/store/stepper';
import { ColorForm } from './color';
import EffectsForm from './effects/effects-form';
import { FontSizeForm } from './typography';

export const StepperForm = () => {
  const methods = useForm();
  const currentStep = useStepperStore(state => state.currentStep);

  const steps = [<ColorForm />, <FontSizeForm />, <EffectsForm />];
  return (
    <>
      <FormProvider {...methods}>
        <section className="bg-white text-primary p-8 rounded-md w-full max-w-2xl shadow-xl">
          {steps[currentStep]}
        </section>
      </FormProvider>
    </>
  );
};
