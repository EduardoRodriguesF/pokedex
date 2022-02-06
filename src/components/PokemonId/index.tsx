import React from 'react';
import { usePokemon } from '../../hooks/pokemon';

const PokemonId: React.FC = () => {
  const { pokemon } = usePokemon();

  return <span className="pokemonId">{pokemon?.id || '???'}</span>;
}

export default PokemonId;