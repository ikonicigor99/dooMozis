import styled from "styled-components";
import arrow from "../../assets/images/arrowLeft.png";
import { Colors } from "../../AppStyle";
import leftWhiteIcon from "../../assets/images/left-arrow-white.png";
export const MainHolderSlider = styled.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    .slider {
      width: 100%;
    }
  }
`;
export const HolderContent = styled.div`
  width: 880px;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  z-index: 999;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
export const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 90%;
    align-items: center;
  }
`;
export const Title = styled.div`
  font-size: 38px;
  color: ${Colors.white};
  text-align: center;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 28px;
  }
`;
export const Text = styled.div`
  font-size: 16px;
  line-height: 25px;
  font-style: italic;
  color: ${Colors.white};
  padding-top: 10px;
  text-align: center;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 13px;
  }
`;
