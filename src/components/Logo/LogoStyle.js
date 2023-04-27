import styled from "styled-components";
import { Colors } from "../../AppStyle";
import iconLogo from "../../assets/images/trees.png";
export const HolderLogo = styled.div`
  width: 30%;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 60%;
  }
`;
export const BackgroundLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  background-color: ${Colors.white};
`;
export const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${iconLogo});
  background-size: 100% 100%;
  background-position: 50% center;
  background-repeat: no-repeat;
`;
export const Text = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-left: 10px;
`;
