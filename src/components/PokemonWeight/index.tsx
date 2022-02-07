import React, { useEffect, useState } from 'react';
import { usePokemon } from '../../hooks/pokemon';


const PokemonWeight: React.FC = () => {
  const [weight, setWeight] = useState('');
  const { pokemon } = usePokemon();

  useEffect(() => {
    if (!pokemon?.weight) return;

    const newWeight = (pokemon.weight/10).toString().replace('.', ',');

    setWeight(newWeight);
  }, [pokemon]);

  return <span className="pokemonWeight">{weight}</span>;
}

export default PokemonWeight;