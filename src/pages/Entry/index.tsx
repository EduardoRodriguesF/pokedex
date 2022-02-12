import React, { Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContextProvider } from '../../hooks/pokemon';

import PokemonNameSkeleton from '../../components/PokemonName/skeleton';
import PokemonTypesSkeleton from '../../components/PokemonTypes/skeleton';
import PokemonHeightSkeleton from '../../components/PokemonHeight/skeleton';
import PokemonWeightSkeleton from '../../components/PokemonWeight/skeleton';

const PokemonName = React.lazy(() => import('../../components/PokemonName'));
const PokemonId = React.lazy(() => import('../../components/PokemonId'));
const PokemonTypes = React.lazy(() => import('../../components/PokemonTypes'));
import PokemonTypeBackgroundBlock from '../../components/PokemonTypeBackgroundBlock';
const PokemonHeight = React.lazy(() => import('../../components/PokemonHeight'));
const PokemonWeight = React.lazy(() => import('../../components/PokemonWeight'));
import PokemonStats from '../../components/PokemonStats';
import PokemonImage from '../../components/PokemonImage';

import { Container, Content, Identifications, Physics, PhysicsItem } from './styles';
import GoBackButton from '../../components/GoBackButton';

const Entry: React.FC = () => {
  const { entryId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PokemonContextProvider entryId={Number(entryId)}>
      <Container>
        <PokemonTypeBackgroundBlock />
        <GoBackButton />
        <PokemonImage />
        <Content>
          <Identifications>
            <Suspense fallback={<PokemonNameSkeleton />}>
              <PokemonName />
              <PokemonId />
            </Suspense>
          </Identifications>
          <Suspense fallback={<PokemonTypesSkeleton/>}>
            <PokemonTypes />
          </Suspense>
          <Physics>
            <PhysicsItem>
              <h3>height</h3>
              <Suspense fallback={<PokemonHeightSkeleton />}>
                <PokemonHeight />
              </Suspense>
            </PhysicsItem>
            <PhysicsItem>
              <h3>weight</h3>
              <Suspense fallback={<PokemonWeightSkeleton />}>
                <PokemonWeight />
              </Suspense>
            </PhysicsItem>
          </Physics>
          <PokemonStats />
        </Content>
      </Container>
    </PokemonContextProvider>
  );
}

export default Entry;