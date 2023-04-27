import styled from "styled-components";
import { Colors } from "../../AppStyle";

export const MainHolderMenu = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    justify-content: center;
    width: 100%;
    border-top: 0.5px solid #fff;
  }
`;
export const HolderOptions = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  .activeClass {
    border-bottom: 2px solid #fff;
    font-weight: 700;
  }
  a {
    text-decoration: none;
    font-size: 14px;
    color: ${Colors.white};
  }
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 90%;
    padding: 10px 0px;
  }
`;
