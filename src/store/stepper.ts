/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormPayload } from '@/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type StepperState = {
  currentStep: number;
  data: FormPayload;
};

type StepperActions = {
  handleNextStep: (payload: any) => void;
  handlePrevStep: (payload: any) => void;
};

const INITIAL_STATE = {
  colors: [],
  fontSize: [],
  borderRadius: [],
  boxShadow: [],
};

export const useStepperStore = create(
  persist<StepperState & StepperActions>(
    set => ({
      currentStep: 0,
      data: INITIAL_STATE,

      handleNextStep: payload => {
        set(state => ({
          data: { ...state.data, payload },
          currentStep: state.currentStep === 2 ? state.currentStep : state.currentStep + 1,
        }));
      },

      handlePrevStep: payload => {
        set(state => ({
          data: { ...state.data, payload },
          currentStep: state.currentStep - 1,
        }));
      },
    }),
    {
      name: 'stepper',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
