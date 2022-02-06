import styled from "styled-components";
import * as colors from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: -64px;
    z-index: 1;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${colors.theme.background};
  border-radius: 16px;
  padding: 64px 0;  

  .pokemonTypeList { 
    display: flex;
    gap: 8px;
    margin-top: 16px;
  }
`;