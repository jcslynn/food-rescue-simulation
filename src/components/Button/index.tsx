import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, MouseEventHandler } from 'react';

type ButtonProps = {
  children?: ReactNode;
  icon?: IconDefinition;
  onClick: MouseEventHandler;
  className?: string;
};
export default function Button({ children, icon, onClick, className }: ButtonProps) {
  return (
    <button className={"bg-btn hover:bg-highlight text-white py-2 px-4 rounded " + className} onClick={onClick}>
      {icon && (
        <FontAwesomeIcon icon={icon} color="white" fixedWidth  className="pr-2"/>
      )}
      {children}
    </button>
  );
}
