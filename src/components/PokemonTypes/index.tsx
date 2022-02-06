import React from 'react';
import { usePokemon } from '../../hooks/pokemon';

import { TypeCard, TypeList } from './styles';

const PokemonTypes: React.FC = () => {
  const { pokemon } = usePokemon();

  return (
    <TypeList className="pokemonTypeList">
      {pokemon?.types.map((type, i) => <TypeCard type={type} key={i}>{type}</TypeCard>)}
    </TypeList>
  );
}

export default PokemonTypes;