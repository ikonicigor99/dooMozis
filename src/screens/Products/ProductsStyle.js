import styled from "styled-components";
import { Colors } from "../../AppStyle";
export const MainHolder = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white};

  @media screen and (min-width: 320px) and (max-width: 768px) {
    height: 175vh;
  }
`;
export const Content = styled.div`
  width: 880px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
