import styled from "styled-components";
import { Colors } from "../../AppStyle";
import line from "../../assets/images/line.svg";
export const MainHolder = styled.div`
  @media screen and (min-width: 320px) and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
export const HolderTitle = styled.div`
  margin: 40px 0px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin: 0;
    width: 90%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  &.productCard {
    display: flex;
  }
  &.imageCard {
    color: ${Colors.black};
  }
  div {
    font-size: 22px;
    font-weight: 700;
  }
  &.productCard {
    div {
      font-size: 16px;
      color: ${Colors.white};
    }
  }
`;
export const Line = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${Colors.backgroundColor};
  margin-top: 10px;
  &.productCard {
    width: 30px;
    margin-top: 10px;
  }
`;
