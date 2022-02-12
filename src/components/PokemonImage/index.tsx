import React from 'react';
import { usePokemon } from '../../hooks/pokemon';

import { Spinner } from './styles';

const PokemonImage: React.FC = () => {
  const { pokemon, isLoading } = usePokemon();

  return (
    <>
      {!isLoading &&
        <img src={pokemon?.image} alt={pokemon?.name} width="475" height="475" />
      || <Spinner />}
    </>
  );
}

export default PokemonImage;