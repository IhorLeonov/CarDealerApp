'use client';

import Button from '@/components/button';
import useSelect from '@/hooks/useSelect';
import { VehicleMakesResponse } from '@/types';

type HomeProps = {
  data: VehicleMakesResponse | undefined;
};

export default function HomePage({ data }: HomeProps) {
  const currentYear = new Date().getFullYear();

  const years = [];
  for (let year = 2015; year <= currentYear; year++) {
    years.push({ year });
  }

  const { Dropdown: MakesDropdown, selectedItem: selectedMake } = useSelect({
    data: data?.Results || [],
    label: 'Model',
    className: 'w-[200px]',
  });

  const { Dropdown: YearsDropdown, selectedItem: selectedYears } = useSelect({
    data: years,
    label: 'Year',
    className: 'w-[200px]',
    disabled: selectedMake === null,
  });

  return (
    <>
      <div className="flex gap-8 [&>p]:text-gray-400">
        <p className="w-[200px]">
          Makes:{' '}
          <span className="block text-white">
            {selectedMake?.MakeName || 'Choose'}
          </span>
        </p>

        <p className="w-[200px]">
          Year:{' '}
          <span className="block text-white">
            {selectedYears?.year || 'Choose'}
          </span>
        </p>
      </div>

      <div className="mt-4 flex gap-8">
        <MakesDropdown />
        <YearsDropdown />

        <Button
          href={`/result/${selectedMake?.MakeId}/${selectedYears?.year}`}
          disabled={!selectedMake || !selectedYears}
          className="text-green-400"
        >
          Next
        </Button>
      </div>
    </>
  );
}
