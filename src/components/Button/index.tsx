import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, MouseEventHandler } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children?: ReactNode;
  icon?: IconDefinition;
  onClick: MouseEventHandler;
  className?: string;
  disabled?: boolean;
};

const ButtonWrapper = styled.button`
  background-color: #6c17a6;
  color: #fffff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  ${props =>
    props.disabled
      ? ''
      : `&:hover {
    background-color: #A955FF;
  }`};
`;

export default function Button({
  children,
  icon,
  onClick,
  className,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonWrapper disabled={disabled} className={className} onClick={onClick}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          color="white"
          fixedWidth
          className="pr-2"
        />
      )}
      {children}
    </ButtonWrapper>
  );
}
