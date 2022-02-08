import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { PokemonContextProvider } from '../../hooks/pokemon';

import PokemonName from '../../components/PokemonName';
import PokemonId from '../../components/PokemonId';
import PokemonImage from '../../components/PokemonImage';
import PokemonTypes from '../../components/PokemonTypes';
import PokemonTypeBackgroundBlock from '../../components/PokemonTypeBackgroundBlock';
import PokemonStats from '../../components/PokemonStats';

import { Container, Content, Identifications, Physics, PhysicsItem } from './styles';
import PokemonHeight from '../../components/PokemonHeight';
import PokemonWeight from '../../components/PokemonWeight';

const Entry: React.FC = () => {
  const { entryId } = useParams();
  const navigate = useNavigate();

  const handleGoBack = useCallback(() => {
    navigate('/');
  }, []);

  return (
    <PokemonContextProvider entryId={Number(entryId)}>
      <Container>
        <PokemonTypeBackgroundBlock />
        <IoIosArrowRoundBack size={42} className="backButton" title="Go back" onClick={handleGoBack} />
        <PokemonImage />
        <Content>
          <Identifications>
            <PokemonName />
            <PokemonId />
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