import styled from 'styled-components';
import { tint } from 'polished';
import * as colors from '../../styles/colors';
import iconPokeballWhite from '../../assets/iconPokeballWhite.png';

interface IContainerProps {
  type: string;
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  color: ${colors.theme.contrastFont};
  background: ${({ type }) => colors.types[type]};
  padding: 0 16px;
  border-radius: 16px;
  overflow: hidden;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    bottom: -50px;
    right: -50px;
    background: url(${iconPokeballWhite}) no-repeat;
    background-size: cover;
    opacity: 0.25;
    width: 300px;
    height: 300px;
    z-index: 1;
  }

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

export const Infos = styled.div`
  padding: 24px 0;
`;

export const Illustration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 8px 0;
`;

export const PokeId = styled.span`
  text-align: right;
  font-weight: 700;
  font-size: 24px;
  opacity: 0.25;

  &::before {
    content: '#';
  }
`;

export const PokeImage = styled.img`
  position: relative;
  z-index: 3;
  display: block;
  max-width: 250px;
`;