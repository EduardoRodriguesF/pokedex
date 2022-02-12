import styled from "styled-components";

interface ISkeletonProps {
  width: string;
  height: string;
  background: string;
}

export const Skeleton = styled.div<ISkeletonProps>`
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background};

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(to right, transparent 0%, #c7c7c7 50%, transparent 100%);
    animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }

  @keyframes load {
    from {
        left: -150px;
    }
    to   {
        left: 100%;
    }
  }
`;