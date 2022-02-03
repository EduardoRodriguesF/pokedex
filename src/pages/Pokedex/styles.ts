import styled from "styled-components";

export const Container = styled.div`
  margin: 24px;
`;

export const PokemonList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`