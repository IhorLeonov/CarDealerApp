import Link from 'next/link';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
  href?: string;
  disabled?: boolean;
};

export default function Button({
  href,
  className,
  children,
  disabled,
  onClick,
}: ButtonProps) {
  const styles =
    'inline-flex min-w-[90px] items-center justify-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none';

  return href ? (
    <Link
      className={twMerge(
        styles,
        className,
        disabled ? 'cursor-default text-gray-400' : 'cursor-pointer',
      )}
      href={disabled ? '' : href}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={twMerge(styles, className, disabled && 'text-gray-400')}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
