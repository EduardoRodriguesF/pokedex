import React, { useEffect, useState } from 'react';
import { usePokemon } from '../../hooks/pokemon';

const PokemonHeight: React.FC = () => {
  const [height, setHeight] = useState('???');

  const { pokemon } = usePokemon();

  useEffect(() => {
    if (!pokemon?.height) return;

    const newHeight = (pokemon.height/10).toString().replace('.', ',');

    setHeight(newHeight);
  }, [pokemon]);

  return <span className="pokemonHeight">{height}</span>;
}

export default PokemonHeight;