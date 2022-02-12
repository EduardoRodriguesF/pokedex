import styled from "styled-components";
import * as colors from '../../styles/colors';
import iconPokeballWhite from '../../assets/iconPokeballWhite.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  
  img {
    margin-top: 64px;
    margin-bottom: -64px;
    z-index: 5;
    width: 80%;
    height: auto;
    max-width: 475px;
  }
  
  .pokemonTypeBackgroundBlock {
    width: 100%;
    height: 500px;
    z-index: 3;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      background: url(${iconPokeballWhite}) no-repeat;
      background-size: contain;
      aspect-ratio: 1;
      width: 250px;
      height: auto;
      right: -50px;
      top: -50px;
      opacity: 0.5;
    }
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 800px;
  background: ${colors.theme.background};
  border-radius: 16px;
  box-sizing: border-box;
  padding: 64px 16px;  
  z-index: 4;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 30px;
  }

  .pokemonTypeList { 
    display: flex;
    gap: 8px;
    margin-top: 4px;
  }

  .pokemonStatsList {
    margin-top: 32px;
  }
`;

export const Identifications = styled.div`
  display: flex;
  align-items: center;

  .pokemonId {
    opacity: 0.6;
    font-size: 20px;
    font-weight: 600;
    text-align: right;
    margin-left: 8px;

    &::before {
      content: '#'
    }
  }
`;

export const Physics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  box-sizing: border-box;
  max-width: 500px;
  width: 100%;
  gap: 24px;
  padding: 24px;
  margin-top: 24px;
  border-radius: 16px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  .pokemonHeight {
    &::after {
      content: 'm';
      margin-left: 4px;
    }
  }

  .pokemonWeight {
    &::after {
      content: 'kg';
      margin-left: 4px;
    }
  }
`;

export const PhysicsItem = styled.div`
  font-weight: 600;
  h3 { 
    opacity: 0.6;
    font-weight: 600;
  }
`;