'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ComponentPropsWithoutRef, Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

type DropdownProps<T> = ComponentPropsWithoutRef<'div'> & {
  data: T[];
  handleSelect: (item: T) => void;
  label?: string;
  disabled?: boolean;
  buttonClass?: string;
};

export default function Dropdown<T extends Record<string, any>>({
  className,
  data,
  label,
  handleSelect,
  disabled = false,
}: DropdownProps<T>) {
  return (
    <div className={twMerge(className)}>
      <Menu>
        <MenuButton as={Fragment}>
          <button
            disabled={disabled}
            className={twMerge(
              'inline-flex min-w-[90px] items-center justify-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-green-400 shadow-inner shadow-white/10',
              disabled && 'text-gray-400 hover:bg-gray-800',
            )}
          >
            {label || 'Options'}
          </button>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom start"
          className="mt-1 w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {data.map((item, idx) => (
            <MenuItem key={item.MakeId || item.year || idx} as={Fragment}>
              <button
                onClick={() => handleSelect(item)}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
              >
                {item.MakeName || item.year || `Option ${idx + 1}`}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
