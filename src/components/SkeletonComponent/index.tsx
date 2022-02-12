import React from 'react';

import { Skeleton } from './styles';

interface ISkeletonComponentProps {
  width: string;
  height: string;
  background?: string;
}

const SkeletonComponent: React.FC<ISkeletonComponentProps> = ({ width, height, background }) => {
  return <Skeleton width={width} height={height} background={background || '#999'} />;
}

export default SkeletonComponent;