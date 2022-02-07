import styled from "styled-components";

interface IStatBarProps {
  value: number;
}

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
`;

export const Stat = styled.li`
  display: grid;
  grid-template-columns: 6fr 1fr 10fr;
  gap: 16px;
  align-items: center;
`;

export const StatName = styled.p`
  opacity: 0.7;
  font-size: 14px;
  white-space: nowrap;
`;

export const StatValue = styled.span`
  text-align: center;
  font-size: 14px;
`;

export const StatBar = styled.div<IStatBarProps>`
  position: relative;
  display: flex;
  width: 100%;
  height: 4px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    background: ${({ value }) => value > 50 ? '#40DCA5' : '#FC6C6D'};
    border-radius: 16px;
    transition: all 1s;
    flex: ${({ value }) => value / 100};

    animation: statBarIntro 1s forwards;
  }
`;
