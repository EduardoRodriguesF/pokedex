import styled from "styled-components";
import { tint } from 'polished';
import * as colors from '../../styles/colors';
import iconPokeballWhite from '../../assets/iconPokeballWhite.png';


export const Container = styled.div`
  margin: 24px;
`;

export const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
`;

export const EntryCard = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: space-between;
  min-width: 320px;
  height: 320px;
  color: ${colors.theme.contrastFont};
  background: ${colors.types.normal};
  padding: 0 16px;
  border-radius: 16px;
  overflow: hidden;
  z-index: 2;
  transform: none;
  transition: all 0.35s;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
  }

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

  h2 {
    white-space: nowrap;
    font-size: 30px;
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
      white-space: nowrap;
      background: rgba(255, 255, 255, 0.25);
    }
  }
`;

export const EntryCardLeft = styled.div`
  padding: 24px 0;
`;

export const EntryCardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-items: end;
  padding: 8px 0;

  span {
    text-align: right;
    font-weight: 700;
    font-size: 24px;
    opacity: 0.25;

    &::before {
      content: '#';
    }
  }

  img {
    position: absolute;
    z-index: 3;
    display: block;
    width: 220px;
    height: auto;
    bottom: 0;
    right: 0;
  }
`;
