import React from 'react';
import SkeletonComponent from '../../SkeletonComponent';

import { Container, Stat } from './styles';

const PokemonStatsSkeleton: React.FC = () => {
  return (
    <Container>
      <Stat>
        <SkeletonComponent width="80px" height="21px" />
        <SkeletonComponent width="18px" height="21px" />
        <SkeletonComponent width="100%" height="4px" />
      </Stat>
      <Stat>
        <SkeletonComponent width="80px" height="21px" />
        <SkeletonComponent width="18px" height="21px" />
        <SkeletonComponent width="100%" height="4px" />
      </Stat>
      <Stat>
        <SkeletonComponent width="80px" height="21px" />
        <SkeletonComponent width="18px" height="21px" />
        <SkeletonComponent width="100%" height="4px" />
      </Stat>
      <Stat>
        <SkeletonComponent width="80px" height="21px" />
        <SkeletonComponent width="18px" height="21px" />
        <SkeletonComponent width="100%" height="4px" />
      </Stat>
      <Stat>
        <SkeletonComponent width="80px" height="21px" />
        <SkeletonComponent width="18px" height="21px" />
        <SkeletonComponent width="100%" height="4px" />
      </Stat>
      <Stat>
        <SkeletonComponent width="80px" height="21px" />
        <SkeletonComponent width="18px" height="21px" />
        <SkeletonComponent width="100%" height="4px" />
      </Stat>
    </Container>
  );
}

export default PokemonStatsSkeleton;