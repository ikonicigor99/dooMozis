import styled from "styled-components";
import { Colors } from "../../AppStyle";

export const MainHolderContent = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 9999;
  background-color: ${Colors.backgroundColor};
  opacity: 0.8;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;
export const Content = styled.div`
  width: 880px;
  display: flex;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
