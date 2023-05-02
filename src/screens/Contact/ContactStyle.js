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
    height: 140vh;
  }
`;
export const HolderContact = styled.div`
  width: 880px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const HolderInfo = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    widht: 100px;
    height: 100px;
  }
  div {
    font-weight: 700;
  }
`;
export const AddressCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
  box-shadow: rgba(60, 64, 67, 0.19) 0px 0px 5px 1px;
  padding: 10px;
  height: 200px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 230px;
    margin-top: 15px;
  }
`;
export const PhoneCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
  box-shadow: rgba(60, 64, 67, 0.19) 0px 0px 5px 1px;
  padding: 10px;
  height: 200px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 230px;
    margin-top: 15px;
  }
`;
export const EmailCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-evenly;
  width: 30%;
  box-shadow: rgba(60, 64, 67, 0.19) 0px 0px 5px 1px;
  padding: 10px;
  height: 200px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 230px;
    margin-top: 15px;
  }
`;
