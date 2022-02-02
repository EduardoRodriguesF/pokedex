import styled from 'styled-components';
import { shade, tint } from 'polished';
import * as colors from '../../styles/colors';

interface IContainerProps {
  type: string;
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${colors.theme.contrastFont};
  background: ${({ type }) => colors.types[type]};
  padding: 24px 16px;
  border-radius: 16px;

  ul { 
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 8px;
    margin-top: 16px;

    li { 
      display: inline;
      width: max-content;
      padding: 8px 16px;
      border-radius: 50px;

      background: ${({ type }) => tint(0.2, colors.types[type])};
    }
  }
`;

export const PokeId = styled.span`
  position: absolute;
  top: 8px;
  right: 16px;
  text-align: right;
  font-weight: 700;
  font-size: 24px;
  opacity: 0.25;

  &::before {
    content: '#';
  }
`;