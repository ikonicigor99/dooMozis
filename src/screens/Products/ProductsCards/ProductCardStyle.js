import styled from "styled-components";

export const MainHolderCards = styled.div`
  width: 100%;
`;
export const HolderCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 880px;
  pointer-events: none;
  flex-direction: auto;
  user-select: none;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;
export const Card = styled.div`
  width: 345px;
  height: 210px;
  position: relative;
  pointer-events: all;
  overflow: hidden;
  object-fit: cover;
  margin: 10px 0px;
  box-shadow: rgba(60, 64, 67, 0.19) 0px 0px 5px 1px;

  div {
    position: absolute;
    bottom: 0px;
    left: 10px;
    width: 225px;
  }
  :hover {
    filter: grayscale(0);
  }
  img {
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    cursor: pointer;
  }
  :hover img {
    transform: scale(1.2);
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
