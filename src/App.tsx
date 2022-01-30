import { useEffect } from "react";
import api from "./services/api";

function App() {
  const getPokemon = async () => {
    await api.get('pokemon/?limit=151').then((response) => {
      console.log('>>> response', response.data);
    });
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <h1>Hello world</h1>
  )
}

export default App;
