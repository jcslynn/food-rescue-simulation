import { ElementType, ReactNode } from 'react';

type TypographyProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'subtitle' | 'body1' | 'body2' | 'bodyBold';
  children?: ReactNode;
  color?: string;
  component?: ElementType;
  className?: string;
};

export default function Typography({
  variant = 'body1',
  children,
  color = 'text-white',
  component = 'div',
  className,
}: TypographyProps) {
  if ((component = 'span'))
    return <span className={`${color} ${getClass(variant)} ${className}`}>{children}</span>;
  return <div className={`${color} ${getClass(variant)} ${className}`}>{children}</div>;
}

const getClass = (
  variant: 'h1' | 'h2' | 'h3' | 'subtitle' | 'body1' | 'body2' | 'bodyBold'
) => {
  switch (variant) {
    case 'h1':
      return 'font-semibold text-2xl';
    case 'h2':
      return 'font-semibold text-xl';
    case 'h3':
      return 'font-semibold text-lg';
    case 'subtitle':
      return 'font-medium text-base';
    case 'body2':
      return 'font-normal text-sm';
    case 'bodyBold':
      return 'font-semibold text-sm';
    case 'body1':
    default:
      return 'font-normal text-base';
  }
};
