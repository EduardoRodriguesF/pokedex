import React, { Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContextProvider } from '../../hooks/pokemon';

import PokemonNameSkeleton from '../../components/PokemonName/skeleton';

const PokemonName = React.lazy(() => import('../../components/PokemonName'));
const PokemonId = React.lazy(() => import('../../components/PokemonId'));
import PokemonImage from '../../components/PokemonImage';
import PokemonTypes from '../../components/PokemonTypes';
import PokemonTypeBackgroundBlock from '../../components/PokemonTypeBackgroundBlock';
import PokemonStats from '../../components/PokemonStats';
import PokemonHeight from '../../components/PokemonHeight';
import PokemonWeight from '../../components/PokemonWeight';

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
          <PokemonTypes />
          <Physics>
            <PhysicsItem>
              <h3>height</h3>
              <PokemonHeight />
            </PhysicsItem>
            <PhysicsItem>
              <h3>weight</h3>
              <PokemonWeight />
            </PhysicsItem>
          </Physics>
          <PokemonStats />
        </Content>
      </Container>
    </PokemonContextProvider>
  );
}

export default Entry;