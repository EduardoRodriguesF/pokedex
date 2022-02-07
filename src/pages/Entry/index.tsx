import React from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContextProvider } from '../../hooks/pokemon';

import PokemonName from '../../components/PokemonName';
import PokemonId from '../../components/PokemonId';
import PokemonImage from '../../components/PokemonImage';
import PokemonTypes from '../../components/PokemonTypes';
import PokemonTypeBackgroundBlock from '../../components/PokemonTypeBackgroundBlock';
import PokemonStats from '../../components/PokemonStats';

import { Container, Content, Identifications } from './styles';

const Entry: React.FC = () => {
  const { entryId } = useParams();

  return (
    <PokemonContextProvider entryId={Number(entryId)}>
      <Container>
        <PokemonTypeBackgroundBlock />
        <PokemonImage />
        <Content>
          <Identifications>
            <PokemonName />
            <PokemonId />
          </Identifications>
          <PokemonTypes />
          <PokemonStats />
        </Content>
      </Container>
    </PokemonContextProvider>
  );
}

export default Entry;