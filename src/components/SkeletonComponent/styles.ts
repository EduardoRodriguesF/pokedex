import styled from "styled-components";

interface ISkeletonProps {
  width: string;
  height: string;
}

export const Skeleton = styled.div<ISkeletonProps>`
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  width: ${props => props.width};
  height: ${props => props.height};

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%);
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