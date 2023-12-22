import React, { FC } from 'react';
import './Image.css';
import lion from '../../assets/img/lion.jpg';
import pantera from '../../assets/img/pantera.jpg';
import tiger from '../../assets/img/tiger.jpg';
import wolf from '../../assets/img/wolf.jpg';

export { lion, pantera, tiger, wolf };

export enum Float {
  Left = 'float-left',
  Right = 'float-right',
}

export interface ImageProps {
  alt?: string;
  src?: string;
  float?: Float;
}

export const Image: FC<ImageProps> = ({
  alt = 'Picture with wolf',
  src = wolf,
  float = Float.Right,
}) => {
  return (
    <div data-testid="image">
      <img src={src} alt={alt} className={'image ' + float} />
    </div>
  );
};

export const ImageExamples: FC = () => (
  <div>
    <Image src={lion} alt="Lion" float={Float.Left} />
    <Image src={pantera} alt="Pantera" float={Float.Right} />
    <Image src={tiger} alt="Tiger" float={Float.Left} />
    <Image src={wolf} alt="Wolf" float={Float.Right} />
  </div>
);

export default ImageExamples;
