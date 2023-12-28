import React, { FC, useState } from 'react';
import './Details.css';
import { heading } from '../../helpers/text';

export interface DetailsProps {
  title?: string;
  text?: string;
  children?: React.ReactNode;
}

export const Details: FC<DetailsProps> = ({
  title = heading,
  text = '',
  children,
}) => {
  const [details, setDetails] = useState(false);

  return (
    <details data-testid="details">
      <summary onClick={setDetails.bind(null, true)}>{title}</summary>
      {details && <div>{text || children}</div>}
    </details>
  );
};
