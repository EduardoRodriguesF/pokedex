import { useCallback, useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import api from "./services/api";
import GlobalStyle from "./styles/global";

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
      <GlobalStyle />
      {pokemonList.map(({ name }, i) => <PokemonCard name={name} key={i} />)}
    </>
  )
}

export default App;
