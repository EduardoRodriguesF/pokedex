interface IColors {
  [property: string]: string;
}

const theme: IColors = {
  font: '#1B2530',
  contrastFont: '#fff',
  highlight: '#F9BA17',
  background: '#fff',
  background2: '#999',
  absoluteBackground: '#F5F5F5',

  
}

const types: IColors = {
  normal: '#b3ae94',
  fire: '#FB6B6B',
  water: '#76BDFE',
  electric: '#FFCE4B',
  grass: '#48D0B0',
  ice: '#96D9D6',
  fighting: '#a6392d',
  poison: '#A33EA1',
  rock: '#B6A136',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  ghost: '#7C538C',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#f5abff',
}

export { theme, types };