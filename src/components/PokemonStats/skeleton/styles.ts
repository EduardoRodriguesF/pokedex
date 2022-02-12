import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
`;

export const Stat = styled.li`
  display: grid;
  grid-template-columns: 6fr 1fr 10fr;
  gap: 16px;
  align-items: center;
`;