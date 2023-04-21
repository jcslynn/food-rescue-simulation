import styled from 'styled-components';
import Image from 'next/image';
import Typography from '@/components/Typography';
import { DRAWER_WIDTH } from '../Drawer';
import { ReactNode } from 'react';
import worldImage from '../../images/world.png';

export type Sprite = {
  text: string | ReactNode;
  body?: ReactNode;
};

type IntroSpriteProps = {
  texts: Sprite[];
  showImage?: boolean;
  top?: number;
};

const Wrapper = styled.div`
  position: absolute;
  left: ${DRAWER_WIDTH};
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: opacity 0.5s linear;
`;

const SpriteWrapper = styled.div`
  position: absolute;
  width: calc(100% - ${DRAWER_WIDTH});
  height: 100%;
  top: 0;
  z-index: 1;
  display: block;
  overflow: hidden;
  //   opacity: 0;
`;

const Sprite = styled.div<{ num: number; last: boolean; top?: number }>`
  padding: 5rem;
  text-align: center;
  z-index: 1;
  opacity: 0;
  animation: ${({ last, num }) =>
    last
      ? `introEnd 1.6s ease-out ${0.5 + num * 5}s 1 normal forwards`
      : `intro 5s ${0.5 + num * 5}s`};

  top: ${props=> props.top ?? 40}%;
  position: absolute;
  vertical-align: center;
  width: 100%;

  @keyframes intro {
    0% {
      transform: perspective(2000px) translate3d(0, -50%, -1300px);
      animation-timing-function: cubic-bezier(0.2, 0.655, 0.4, 0.885);
      opacity: 0;
    }
    50% {
      transform: perspective(2000px) translate3d(0, -50%, 0);
      animation-timing-function: cubic-bezier(0.4, 0.015, 0.595, 0.99);
      opacity: 1;
    }
    100% {
      transform: perspective(2000px) translate3d(0, -50%, 1300px);
      animation-timing-function: cubic-bezier(0.735, 0.045, 0.95, 0.5);
      opacity: 0;
    }
  }

  @keyframes introEnd {
    0% {
      transform: perspective(2000px) translate3d(0, -50%, -100px);
      opacity: 0;
    }
    100% {
      transform: perspective(2000px) translate3d(0, -50%, 0);
      opacity: 1;
    }
  }
`;

const BottomContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - ${DRAWER_WIDTH});
  align-items: flex-end;
  height: 100%;
`;

export default function IntroSprite({
  texts,
  showImage = true,
  top,
}: IntroSpriteProps) {
  const num = texts.length;

  return (
    <Wrapper>
      {texts.map(({ text, body }: Sprite, id: number) => (
        <SpriteWrapper key={id} >
          <Sprite num={id} last={id === num - 1} top={top}>
            <Typography variant="h1">{text}</Typography>
            {body}
          </Sprite>
        </SpriteWrapper>
      ))}
      {showImage && (
        <BottomContentWrapper>
          <Image src={worldImage} alt="World" />
        </BottomContentWrapper>
      )}
    </Wrapper>
  );
}
