import React, { Suspense, useCallback } from 'react';
import { PokemonContextProvider } from '../../hooks/pokemon';
import { useNavigate } from 'react-router-dom';

const PokemonName = React.lazy(() => import('../../components/PokemonName'));
const PokemonTypes = React.lazy(() => import('../../components/PokemonTypes'));
const PokemonId = React.lazy(() => import('../../components/PokemonId'));
const PokemonSprite = React.lazy(() => import('../../components/PokemonSprite'));

import { Container, PokemonList, EntryCard, EntryCardLeft, EntryCardRight } from './styles';
import SkeletonComponent from '../../components/SkeletonComponent';

const Pokedex: React.FC = () => {  
  const navigate = useNavigate();

  const handleCardClick = useCallback((entryId) => {
    navigate(`/entry/${entryId}`);
  }, []);

  return (
    <Container>
      <h1>Pokedex</h1>
      <PokemonList>
        <Suspense fallback={
          <>
            <SkeletonComponent width="100%" height="320px" />
            <SkeletonComponent width="100%" height="320px" />
            <SkeletonComponent width="100%" height="320px" />
          </>
        }>
          {[...Array(151)].map((_, i) => (
            <PokemonContextProvider key={i} entryId={i+1}>
              <EntryCard onClick={() => handleCardClick(i+1)}>
                <EntryCardLeft>
                  <PokemonName />
                  <PokemonTypes />
                </EntryCardLeft>
                <EntryCardRight>
                  <PokemonId />
                  <PokemonSprite />
                </EntryCardRight>
              </EntryCard>
            </PokemonContextProvider>
          ))}
        </Suspense>
      </PokemonList>
    </Container>
  );
}

export default Pokedex;