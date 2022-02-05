import React from 'react';
import { usePokemon } from '../../hooks/pokemon';

const PokemonName: React.FC = () => {
  const { pokemon } = usePokemon();

  return <h2>{pokemon?.name || '???'}</h2>;
}

export default PokemonName;