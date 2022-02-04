import styled from "styled-components";
import * as colors from '../../styles/colors';

interface IContainerProps {
  type: string;
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ type }) => colors.types[type]};
  min-height: 100vh;

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
  min-height: 100vh;
  background: ${colors.theme.background};
  border-radius: 64px 64px 0 0;
  padding-top: 64px;  
`;