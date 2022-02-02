import React, { useState, useEffect, useCallback } from 'react';
import IPokemon from '../../interfaces/IPokemon';
import api from '../../services/api';

import { Container, PokeId } from './styles';

type IProps  = {
  name: string;
}

const PokemonCard: React.FC<IProps> = ({ name }) => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  const getPokemon = useCallback(async () => {
    api.get(`pokemon/${name}`).then(({ data }) => {
      setPokemon(data);
    });
  }, []);

  useEffect(() => {
    getPokemon();
  });

  return (
    <Container type={pokemon?.types[0].type.name || 'normal'}>
      <h2>{pokemon?.name}</h2>
      <ul>
        {pokemon?.types.map((type) => <li>{type.type.name}</li>)}
      </ul>

      <PokeId>{pokemon?.id}</PokeId>
    </Container>
  );
}

export default PokemonCard;