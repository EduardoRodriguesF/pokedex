import React from 'react';
import { usePokemon } from '../../hooks/pokemon';

const PokemonTypes: React.FC = () => {
  const { pokemon } = usePokemon();

  return (
    <ul>
      {pokemon?.types.map((type, i) => <li key={i}>{type}</li>)}
    </ul>
  );
}

export default PokemonTypes;