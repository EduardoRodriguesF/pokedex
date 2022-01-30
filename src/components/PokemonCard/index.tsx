import React, { useState, useEffect, useCallback } from 'react';
import IPokemon from '../../interfaces/IPokemon';
import api from '../../services/api';

import { Container, TypesContainer, Type } from './styles';

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
    <Container>
      <h2>{pokemon?.name}</h2>
      <TypesContainer>
        {pokemon?.types.map((type) => <Type name={type.type.name}>{type.type.name}</Type>)}
      </TypesContainer>
    </Container>
  );
}

export default PokemonCard;