import React from 'react';

import { Skeleton } from './styles';

interface ISkeletonComponentProps {
  width: string;
  height: string;
}

const SkeletonComponent: React.FC<ISkeletonComponentProps> = ({ width, height }) => {
  return <Skeleton width={width} height={height} />;
}

export default SkeletonComponent;