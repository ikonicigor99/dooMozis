import styled from "styled-components";
import { Colors } from "../../AppStyle";

export const MainHolder = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${Colors.white};
  @media screen and (min-width: 320px) and (max-width: 768px) {
    height: 180vh;
  }
`;
export const Holder = styled.div`
  width: 880px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;
export const HolderCards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  box-shadow: rgba(60, 64, 67, 0.19) 0px 0px 5px 1px;
  padding: 10px;
  height: 200px;
`;
export const Icon = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`;
export const Text = styled.div`
  text-align: center;
  font-size: 14px;
`;
