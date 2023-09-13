import { FormProvider, useForm } from 'react-hook-form';
import { ColorForm } from './components/color/color-form';
import { Button } from './components/ui/button';

export default function App() {
  const methods = useForm();

  return (
    <div className="h-screen container mx-auto">
      {/* <header className="p-4">
        <h1 className="font-bold text-2xl">tw-gen</h1>
      </header> */}

      <main className="h-full flex flex-col items-center justify-center">
        <section className="bg-white text-primary p-8 rounded-md w-full max-w-2xl shadow-xl">
          <div className="border-b border-gray-300 pb-2">
            <h2 className="font-semibold text-2xl">Color</h2>
            <p className="text-gray-500">Enter and choose the colors you want to use</p>
          </div>

          <p className="text-gray-600 my-6">
            Colors are taken from the Figma Local Paint Styles. Colors can be grouped in the export
            step. If you want to group codes, prefix them with the same name (only the last two
            parts will be used).
          </p>

          <FormProvider {...methods}>
            <ColorForm />
          </FormProvider>
          <div className="text-right my-10">
            <Button>Next</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
