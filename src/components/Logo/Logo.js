import React, { useState } from "react";
import { HolderLogo, BackgroundLogo, Icon, Text } from "./LogoStyle";
const Logo = () => {
  return (
    <HolderLogo>
      <BackgroundLogo>
        <Icon />
        <Text>Mozis</Text>
      </BackgroundLogo>
    </HolderLogo>
  );
};
export default Logo;
