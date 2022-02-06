import React from 'react';
import { usePokemon } from '../../hooks/pokemon';

const PokemonSprite: React.FC = () => {
  const { pokemon } = usePokemon();

  return <img src={pokemon?.sprite} alt={pokemon?.name} width="96" height="96" />;
}

export default PokemonSprite;