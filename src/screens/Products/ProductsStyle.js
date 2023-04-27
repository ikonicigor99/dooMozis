import styled from "styled-components";
import { Colors } from "../../AppStyle";
export const MainHolder = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white};
`;
export const Content = styled.div`
  width: 880px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
