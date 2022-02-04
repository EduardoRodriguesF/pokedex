import React, { useState, useEffect, useCallback } from 'react';
import IPokemon from '../../interfaces/IPokemon';
import { useNavigate } from "react-router-dom";
import api from '../../services/api';

import { Container, Infos, Illustration, PokeId, PokeImage } from './styles';

type IProps  = {
  name: string;
}

const PokemonCard: React.FC<IProps> = ({ name }) => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  const navigate = useNavigate();

  const getPokemon = useCallback(async () => {
    api.get(`pokemon/${name}`).then(({ data }) => {
      setPokemon(data);
    });
  }, []);

  const handleClick = useCallback(() => {
    if (!pokemon) return;
    
    navigate(`/entry/${pokemon.id}`);
  }, [pokemon]);

  useEffect(() => {
    getPokemon();
  });

  return (
    <Container className={pokemon && 'loaded' || ''} onClick={handleClick} type={pokemon?.types[0].type.name || 'normal'}>
      <Infos>
        <h2>{pokemon?.name || 'loading...'}</h2>
        <ul>
          {pokemon?.types.map((type, i) => <li key={i}>{type.type.name}</li>)}
        </ul>
      </Infos>
      <Illustration>
        <PokeId>{pokemon?.id || '???'}</PokeId>
        <PokeImage src={pokemon?.sprites.other["official-artwork"].front_default} />
      </Illustration>
    </Container>
  );
}

export default PokemonCard;