import React from "react";
import {
  MainHolder,
  Holder,
  HolderCards,
  Card,
  Icon,
  Text,
} from "./AboutProductsStyle";
import Title from "../../components/Title/Title";
import { staRadimoData } from "../../Data";
const AboutProducts = () => {
  return (
    <section id="staRadimo">
      <MainHolder>
        <Holder>
          <Title title="Sta radimo" />
          <HolderCards>
            {staRadimoData.map((item, index) => (
              <Card key={index}>
                <Icon>
                  <img src={item.icon} />
                </Icon>
                <Text>{item.text}</Text>
              </Card>
            ))}
          </HolderCards>
        </Holder>
      </MainHolder>
    </section>
  );
};

export default AboutProducts;
