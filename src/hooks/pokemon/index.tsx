import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../../services/api';

interface IPokemonStat {
  name: string;
  value: number;
  effort: number;
}

interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  image: string;
  stats: IPokemonStat[];
  types: string[];
}

interface IPokemonContextProps {
  pokemon: IPokemon | null;
  setEntry: (entryId: number | string) => void;
}

const DEFAULT_VALUE = {
  pokemon: null,
  setPokemon: () => {}
}

const PokemonContext = createContext<IPokemonContextProps>({} as IPokemonContextProps);
const usePokemon = () => useContext(PokemonContext);

const PokemonContextProvider: React.FC<{entryId: number}> = ({ children, entryId }) => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(DEFAULT_VALUE.pokemon);

  const setEntry = useCallback((entryId) => {
    api.get(`pokemon/${entryId}`).then(({ data }) => {
      const entry = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        image: data.sprites.other["official-artwork"].front_default,
        stats: data.stats.map((stat: { stat: { name: any; }; base_stat: any; effortk: any; }) => {
          return {
            name: stat.stat.name,
            value: stat.base_stat,
            effort: stat.effortk
          }
        }),
        types: data.types.map((type: { type: { name: any; }; }) => type.type.name)
      }
      
      setPokemon(entry);
    });
  }, [entryId]);

  useEffect(() => {
    setEntry(entryId);
  }, [entryId]);

  return (
    <PokemonContext.Provider value={{ pokemon, setEntry }}>
      {children}
    </PokemonContext.Provider>
  )
}

export { PokemonContextProvider, usePokemon }
export default PokemonContext;