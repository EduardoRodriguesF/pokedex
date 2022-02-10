import styled from "styled-components";
import * as colors from '../../styles/colors';
import iconPokeballWhite from '../../assets/iconPokeballWhite.png';


export const Container = styled.div`
  padding: 24px;
  background: ${colors.theme.background};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

export const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
`;

export const EntryCard = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: space-between;
  min-width: 350px;
  height: 320px;
  color: ${colors.theme.contrastFont};
  background: ${colors.theme.background2};
  padding: 0 16px;
  border-radius: 16px;
  overflow: hidden;
  z-index: 2;
  transform: none;
  transition: all 0.35s;
  cursor: pointer;

  @media (max-width: 400px) {
    min-width: 200px;
  }
  
  &:hover {
    transform: translateY(-3px);
    filter: brightness(1.05);

    &::before {
      transform: rotate(10deg);
    }
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
    transition: all 0.35s;
  }

  h2 {
    white-space: nowrap;
    font-size: 30px;
  }

  .pokemonTypeList { 
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 8px;
    margin-top: 16px;
    
    li { 
      display: inline;
      width: max-content;
      padding: 6px 16px;
      border-radius: 50px;
      white-space: nowrap;
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
    font-size: 40px;
    opacity: 0.25;

    &::before {
      content: '#';
    }
  }

  img {
    position: absolute;
    z-index: 3;
    display: block;
    width: 284px;
    height: auto;
    bottom: -16px;
    right: -16px;
    image-rendering: pixelated;
  }
`;
