import React from "react";
import { MainHolder, HolderTitle, Line } from "./TitleStyle";
const Title = ({ title, className }) => {
  return (
    <MainHolder>
      <HolderTitle className={className}>
        <div className={className}>{title}</div>
        <Line className={className} />
      </HolderTitle>
    </MainHolder>
  );
};

export default Title;
