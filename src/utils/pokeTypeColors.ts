interface ITypeColor {
  primary: string;
  secondary: string;
}

function pokeTypeColors(type: string): ITypeColor {
  switch (type) {
    case 'fire': return {
      primary: '#EE8130',
      secondary: '',
    };
    case 'water': return {
      primary: '#6390F0',
      secondary: '',
    };
    case 'electric': return {
      primary: '#F7D02C',
      secondary: '',
    };
    case 'grass': return {
      primary: '#7AC74C',
      secondary: '',
    };
    case 'ice': return {
      primary: '#96D9D6',
      secondary: '',
    };
    case 'fighting': return {
      primary: '#C22E28',
      secondary: '',
    };
    case 'poison': return {
      primary: '#A33EA1',
      secondary: '',
    };
    case 'ground': return {
      primary: '#E2BF65',
      secondary: '',
    };
    case 'flying': return {
      primary: '#A98FF3',
      secondary: '',
    };
    case 'psychic': return {
      primary: '#F95587',
      secondary: '',
    };
    case 'bug': return {
      primary: '#A6B91A',
      secondary: '',
    };
    case 'rock': return {
      primary: '#B6A136',
      secondary: '',
    };
    case 'ghost': return {
      primary: '#735797',
      secondary: '',
    };
    case 'dragon': return {
      primary: '#6F35FC',
      secondary: '',
    };
    case 'dark': return {
      primary: '#705746',
      secondary: '',
    };
    case 'steel': return {
      primary: '#B7B7CE',
      secondary: '',
    };
    case 'fairy': return {
      primary: '#f5abff',
      secondary: '',
    };
    default: return {
      primary: '#A8A77A',
      secondary: '',
    }
  }
}

export default pokeTypeColors;