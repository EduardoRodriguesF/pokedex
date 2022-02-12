import React from 'react';
import SkeletonComponent from '../../SkeletonComponent';

import { TypeList } from './styles';

const PokemonTypesSkeleton: React.FC = () => {
  return (
    <TypeList>
      <SkeletonComponent width="80px" height="37px" />
      <SkeletonComponent width="80px" height="37px" />
    </TypeList>
  );
}

export default PokemonTypesSkeleton;