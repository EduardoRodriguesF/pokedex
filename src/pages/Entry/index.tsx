import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IPokemon from '../../interfaces/IPokemon';
import api from '../../services/api';

import { Container, Content } from './styles';

const Entry: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  const { entryId } = useParams();

  const getPokemon = useCallback(async () => {
    api.get(`pokemon/${entryId}`).then(({ data }) => {
      setPokemon(data);
    });
  }, []);

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Container type={pokemon?.types[0].type.name || 'normal'}>
      <img src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
      <Content>
        <h1>{pokemon?.name || 'loading...'}</h1>
      </Content>
    </Container>
  );
}

export default Entry;