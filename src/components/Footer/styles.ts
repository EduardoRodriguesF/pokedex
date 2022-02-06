import styled from "styled-components";
import * as colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: ${colors.theme.background};

  a {
    color: ${colors.theme.font};
    transition: all 0.3s;

    &:hover {
      opacity: 0.85;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 8px;
`;

export const Credits = styled.div`

`;

export const BuyMeACoffe = styled.a`
  line-height: 2;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: #FFFFFF;
  background-color: #40DCA5;
  border-radius: 50px;
  border: 1px solid transparent;
  padding: 12px 16px;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  transition: 0.3s all;

  &:hover, &:active, &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    color:#FFFFFF;
  }

  img {
    height: 28px;
    width: 28px;
    margin-bottom: 1px;
    box-shadow: none;
    border: none;
    vertical-align: middle;
  }

  span {
    margin-left: 8px;
    font-size: 18px;
    vertical-align: middle;
  }
`;
