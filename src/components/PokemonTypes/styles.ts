import styled from "styled-components";
import { rgba, tint } from "polished";
import * as colors from '../../styles/colors';

interface ITypeCardProps {
  type: string;
}

export const TypeList = styled.ul`
  list-style: none;
`;

export const TypeCard = styled.li<ITypeCardProps>`
  position: relative;
  color: ${({ type }) => tint(0.65, colors.types[type])};
  background: ${({ type }) => rgba(colors.types[type], 0.5)};
  border: 3px solid ${({ type }) => tint(0.65, colors.types[type])};
  box-sizing: border-box;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 50px;
  white-space: nowrap;
  width: max-content;
`;
