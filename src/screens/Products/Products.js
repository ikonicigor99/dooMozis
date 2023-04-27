import React from "react";
import { MainHolder, Content } from "./ProductsStyle";
import Title from "../../components/Title/Title.js";
import Cards from "../../components/Cards/Cards.js";
import ProductCard from "./ProductsCards/ProductCard";
const Products = () => {
  return (
    <section id="proizvodi">
      <MainHolder>
        <Content>
          <Title title="Nasi proizvodi" />
          {/* <Cards type="about" /> */}
          <ProductCard />
        </Content>
      </MainHolder>
    </section>
  );
};

export default Products;
