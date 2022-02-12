import React from 'react';
import { usePokemon } from '../../hooks/pokemon';

import { Container, Stat, StatName, StatValue, StatBar } from './styles';

const PokemonStats: React.FC = () => {
  const { pokemon } = usePokemon();

  return (
    <Container className="pokemonStatsList">
      {pokemon?.stats.map((stat, key) => (
        <Stat key={key}>
          <StatName>{stat.name.replace('special-', 'sp. ')}</StatName>
          <StatValue>{stat.value}</StatValue>
          <StatBar value={stat.value} />
        </Stat>
      ))}
    </Container>
  );
}

export default PokemonStats;