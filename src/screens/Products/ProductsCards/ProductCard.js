import React from "react";
import { MainHolderCards, HolderCards, Card } from "./ProductCardStyle";
import { Products } from "../../../Data";
import Title from "../../../components/Title/Title";
const ProductCard = () => {
  return (
    <MainHolderCards>
      <HolderCards>
        {Products.map((item) => (
          <Card>
            <img src={`${item.img}`} />
            <Title title={item.title} className="productCard" />
          </Card>
        ))}
      </HolderCards>
    </MainHolderCards>
  );
};

export default ProductCard;
