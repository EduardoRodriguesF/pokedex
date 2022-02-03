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

interface ISprites {
  other: {
    'official-artwork': {
      front_default: string;
    }
  }
}

interface IPokemon {
  id: number;
  order: number;
  name: string;
  types: [IType];
  stats: [IStat];
  height: number;
  weight: number;
  sprites: ISprites;
}

export default IPokemon;