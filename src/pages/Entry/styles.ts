import styled from "styled-components";
import * as colors from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  img {
    margin-bottom: -64px;
    z-index: 5;
  }
  
  .pokemonTypeBackgroundBlock {
    width: 100%;
    height: 500px;
    z-index: 3;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${colors.theme.background};
  border-radius: 16px;
  box-sizing: border-box;
  padding: 64px 16px;  
  z-index: 4;

  h2 {
    font-size: 40px;
  }

  .pokemonTypeList { 
    display: flex;
    gap: 8px;
    margin-top: 16px;
  }
`;

export const Identifications = styled.div`
  display: flex;

  .pokemonId {
    opacity: 0.5;
    font-size: 24px;
    font-weight: 600;
    text-align: right;
    margin-left: 8px;

    &::before {
      content: '#'
    }
  }
`;