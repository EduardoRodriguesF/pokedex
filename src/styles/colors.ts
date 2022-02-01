interface IColors {
  [property: string]: string;
}

const theme: IColors = {
  font: '#eaeced',
  highlight: '#F9BA17',
  background: '#333C62',
  absoluteBackground: '#252C4C',

  
}

const types: IColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  rock: '#B6A136',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#f5abff',
}

export { theme, types };