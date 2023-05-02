import React from "react";
import Title from "../../components/Title/Title";
import {
  MainHolder,
  HolderContact,
  HolderInfo,
  AddressCard,
  PhoneCard,
  EmailCard,
} from "./ContactStyle";
import locationIcon from "../../assets/images/location.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import emailIcon from "../../assets/images/email.png";
export const Contact = () => {
  return (
    <MainHolder id="kontakt">
      <HolderContact>
        <Title title="Contact Us" />
        <HolderInfo>
          <AddressCard>
            <img src={locationIcon} />
            <div>Ulice bb 75400, Zvornik</div>
          </AddressCard>
          <PhoneCard>
            <img src={phoneIcon} />
            <div>065/841-434</div>
          </PhoneCard>
          <EmailCard>
            <img src={emailIcon} />
            <div>ikoniczoran@hotmail.com</div>
          </EmailCard>
        </HolderInfo>
      </HolderContact>
    </MainHolder>
  );
};
