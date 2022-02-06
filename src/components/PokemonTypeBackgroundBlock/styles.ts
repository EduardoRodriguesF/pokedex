import styled from "styled-components";
import * as colors from '../../styles/colors';

interface IContainerProps {
  type: string;
}

export const Container = styled.div<IContainerProps>`
  position: absolute;
  background: ${({ type }) => colors.types[type]};
`;