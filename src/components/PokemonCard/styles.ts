import styled from 'styled-components';
import pokeTypeColors from '../../utils/pokeTypeColors';
import { darken } from 'polished';

interface TypeProps {
  name: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  background: #333C62;
  padding: 24px 16px;
  border-radius: 8px;
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 16px;
`

export const Type = styled.span`
  padding: 6px 16px;
  border-radius: 50px;

  color: ${({ name }) => darken(0.3, pokeTypeColors(name).primary)};
  background: ${({ name }) => pokeTypeColors(name).primary};
`