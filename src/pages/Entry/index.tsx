import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

const Entry: React.FC = () => {
  const { entryId } = useParams();

  useEffect(() => {
    console.log('>>> pokemonId', entryId)
  }, []);

  return (
    <h1>This is entry {entryId}</h1>
  );
}

export default Entry;