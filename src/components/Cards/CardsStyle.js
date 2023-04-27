import styled from "styled-components";
import { Colors } from "../../AppStyle";
export const MainHolder = styled.div`
  height: 100%;
  padding: 30px 0px;
`;
export const HolderAbout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 355px;
  height: 230px;
  cursor: pointer;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin: 10px 0px;

  .text {
    font-size: 14px;
  }
  img {
    width: 100%;
    height: 100%;
    transition: 0.4s;

    :hover {
      transform: scale(1.2);
    }
  }
`;
export const HolderTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 0px;
  .title {
    font-size: 18px;
    letter-spacing: 1px;
    text-align: center;
  }
  img {
    width: 30px;
    padding-right: 10px;
  }
`;
