import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{
  border?: boolean;
  dense?: boolean;
  noPadding?: boolean;
}>`
  padding-bottom: ${props => (props.noPadding ? 0 : 13)}px;
  padding-top: ${props => (props.noPadding ? 0 : '0.75rem')};
  border-bottom: ${props => (props.border ? '0.5px solid #c1c1c1' : 'none')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => (props.dense ? 0 : '2rem')};
`;

export default function Header({
  children,
  border = false,
  dense = false,
  noPadding = false,
}: {
  children?: ReactNode;
  border?: boolean;
  dense?: boolean;
  noPadding?: boolean;
}) {
  return (
    <Wrapper border={border} dense={dense} noPadding={noPadding}>
      {children}
    </Wrapper>
  );
}
