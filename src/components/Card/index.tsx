import { MouseEventHandler, ReactNode, useState } from 'react';
import Header from '../Header';
import Typography from '../Typography';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CardProps = {
  children?: ReactNode;
  header?: string;
  headerIcon?: IconDefinition;
  withBorder?: boolean;
  className?: string;
  minimized?: boolean;
};

export default function Card({
  children,
  header,
  withBorder = false,
  headerIcon,
  className,
  minimized = false,
}: CardProps) {
  const [expanded, expand] = useState(!minimized);

  const handleClick = () => {
    expand(!expanded);
  };
  return (
    <div className={`p-[20px] rounded-[10px] bg-primary min-w-card text-left ${expanded ? "row-span-2": ""}  `+ className}>
      {header && (
        <Header border={withBorder} dense noPadding={!children}>
          <Typography color="text-highlight" variant="h3">
            {header}
          </Typography>
          {headerIcon && (
            <FontAwesomeIcon
              icon={headerIcon}
              color="white"
              fontSize={24}
              opacity={0.2}
              onClick={handleClick}
              className={`pr-2 ${!!handleClick ? 'cursor-pointer': ''}`}
            />
          )}
        </Header>
      )}
      {expanded && children}
    </div>
  );
}
