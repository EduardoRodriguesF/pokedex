import styled from 'styled-components';
import * as colors from '../../styles/colors';
import { darken } from 'polished';

interface ITypeProps {
  name: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  background: ${colors.theme.background};
  padding: 24px 16px;
  border-radius: 8px;
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 16px;
`

export const Type = styled.span<ITypeProps>`
  padding: 6px 16px;
  border-radius: 50px;

  color: ${({ name }) => darken(0.3, colors.types[name])};
  background: ${({ name }) => colors.types[name]};
`