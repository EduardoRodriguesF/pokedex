import React from 'react';
import { usePokemon } from '../../hooks/pokemon';

import { Container } from './styles';

const PokemonTypeBackgroundBlock: React.FC = () => {
  const { pokemon } = usePokemon();

  return <Container className="pokemonTypeBackgroundBlock" type={pokemon?.types[0] || 'normal'} />;
}

export default PokemonTypeBackgroundBlock;