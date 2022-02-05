import React, { useCallback } from 'react';
import { PokemonContextProvider } from '../../hooks/pokemon';
import { useNavigate } from 'react-router-dom';

import PokemonName from '../../components/PokemonName';
import PokemonTypes from '../../components/PokemonTypes';
import PokemonId from '../../components/PokemonId';
import PokemonImage from '../../components/PokemonImage';

import { Container, PokemonList, EntryCard, EntryCardLeft, EntryCardRight } from './styles';

const Pokedex: React.FC = () => {  
  const navigate = useNavigate();

  const handleCardClick = useCallback((entryId) => {
    navigate(`/entry/${entryId}`);
  }, []);

  return (
    <Container>
      <h1>Pokedex</h1>
      <PokemonList>
        {[...Array(151)].map((_, i) => (
          <PokemonContextProvider key={i} entryId={i+1}>
            <EntryCard onClick={() => handleCardClick(i+1)}>
              <EntryCardLeft>
                <PokemonName />
                <PokemonTypes />
              </EntryCardLeft>
              <EntryCardRight>
                <PokemonId />
                <PokemonImage />
              </EntryCardRight>
            </EntryCard>
          </PokemonContextProvider>
        ))}
      </PokemonList>
    </Container>
  );
}

export default Pokedex;