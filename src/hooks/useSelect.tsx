'use client';

import Dropdown from '@/components/dropdown';
import { useState } from 'react';

type UseDropdownProps<T> = {
  className?: string;
  data: T[];
  label?: string;
  disabled?: boolean;
  buttonClass?: string;
};

export default function useSelect<T extends Record<string, any>>({
  data,
  label,
  className,
  disabled,
}: UseDropdownProps<T>) {
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const handleSelect = (item: T) => setSelectedItem(item);

  return {
    selectedItem,
    Dropdown: () => (
      <Dropdown
        className={className}
        data={data}
        handleSelect={handleSelect}
        label={label}
        disabled={disabled}
      />
    ),
    handleSelect,
  };
}
