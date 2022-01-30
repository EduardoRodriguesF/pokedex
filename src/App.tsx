import { useCallback, useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import api from "./services/api";

type IPokemonListState = {
  name: string;
}

function App() {
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
    <>
      {pokemonList.map(({ name }, i) => <PokemonCard name={name} key={i} />)}
    </>
  )
}

export default App;
