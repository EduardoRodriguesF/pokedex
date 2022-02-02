import React, { useCallback, useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import api from '../../services/api';

import { Container, PokemonList } from './styles';

type IPokemonListState = {
  name: string;
}

const Pokedex: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<IPokemonListState[]>([]);

  const getPokemon = useCallback( async() => {
    await api.get('pokemon/?limit=151').then(({ data }) => {
      setPokemonList(data.results);
    });
  }, []);

  useEffect(() => {
    getPokemon();
  }, []);
  
  return (
    <Container>
      <h1>Pokedex</h1>
      <PokemonList>
        {pokemonList.map(({ name }, i) => <PokemonCard name={name} key={i} />)}
      </PokemonList>
    </Container>
  );
}

export default Pokedex;