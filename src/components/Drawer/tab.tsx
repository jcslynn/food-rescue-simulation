import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { MouseEventHandler } from 'react';

type TabProps = {
  //   children?: ReactNode;
  index?: number;
  icon?: IconDefinition;
  text?: string;
  selected?: boolean;
  onClick?: MouseEventHandler;
};

const Wrapper = styled.div<{ selected: boolean; index: number }>`
  max-width: 200px;
  margin-top: 36px;
  margin-bottom: 36px;
  cursor: pointer;
  border-radius: 8px;
  padding: 12px;
  background: ${props => (props.selected ? '#38145D' : 'none')};
  transition: width 1s;
  position: relative;
  // top: ${props => props.index * 100}px;
  text-color: white;
  display: flex;
  flex-direction: row;
  // width: ${props => (props.selected ? 200 : 44)}px;
  width: auto;

  &:hover {
    background: #38145d;
    // width: 200px;
  }

  &:hover div {
    transition: width 1s;
    display: block;
    animation: fadeIn 1s;
  }

 
`;

const Text = styled.div<{ selected: boolean }>`
  // display:  ${props => (props.selected ? 'block' : 'none')};
  display: none;
  margin-left: 16px;
  color: white;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default function Tab({
  index = 0,
  icon,
  text,
  selected = false,
  onClick,
}: TabProps) {
  return (
    <Wrapper selected={selected} onClick={onClick} index={index}>
      {icon && (
        <FontAwesomeIcon icon={icon} color="white" fixedWidth fontSize={24} />
      )}
      {/* <Text selected={selected}>{text}</Text> */}
    </Wrapper>
  );
}
