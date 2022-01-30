interface IType {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

interface IStat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  }
}

interface IPokemon {
  order: number;
  name: string;
  types: [IType];
  stats: [IStat];
  height: number;
  weight: number;
}

export default IPokemon;